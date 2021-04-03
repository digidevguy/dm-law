import { useRouter } from "next/router";
import Link from "../../src/Link";
import Image from "next/image";
import {
  AppBar,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Collapse,
  Divider,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SwipeableDrawer as MuiDrawer,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Fragment, useEffect, useRef, useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("xs")]: { display: "block" },
  },
  nav: {
    "& button": {
      color: "#000000",
    },
    "& a": {
      color: "#000000",
    },
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: { display: "none" },
  },
  text: {
    color: "#00303f",
  },
  drawer: {
    width: "180px",
  },
  popupMenu: {
    zIndex: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);

  const drawerItems = [
    { title: "Home", route: "/" },
    {
      title: "About",
      route: "/about",
    },
    {
      title: "Contact Us",
      route: "/contact",
    },
    {
      title: "Client Portal",
      route: "/",
    },
  ];

  const nestedItems = [
    { title: "Estate Planning" },
    { title: "Family Law" },
    { title: "Business Practice" },
    { title: "Intellectual Property" },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleClick = (e, route) => {
    e.preventDefault();
    router.push(route);
    handleDrawerToggle();
  };

  const handleMenuClick = () => {
    setNestedOpen(!nestedOpen);
  };

  const handleNavToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleNavClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setMenuOpen(false);
  };

  function handleListKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      setMenuOpen(false);
    }
  }

  const prevOpen = useRef(menuOpen);
  useEffect(() => {
    if (prevOpen.current === true && menuOpen === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <header className={classes.root}>
      <MuiDrawer
        open={open}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
      >
        <List className={classes.drawer}>
          {drawerItems.map((item, index) => {
            const { title, route } = item;
            return (
              <Fragment>
                <ListItem
                  button
                  key={title}
                  onClick={(e) => {
                    handleClick(e, route);
                  }}
                >
                  <ListItemText primary={title} />
                </ListItem>
                <Divider variant="middle" />
              </Fragment>
            );
          })}
          <ListItem button onClick={handleMenuClick}>
            <ListItemText primary="Practice Areas" />
            {nestedOpen ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Divider variant="middle" />
          <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {nestedItems.map((item, index) => {
                const { title } = item;
                return (
                  <Fragment>
                    <ListItem
                      button
                      key={title}
                      // onClick={(e) => {
                      //   handleClick(e, route);
                      // }}
                    >
                      <ListItemText primary={title} />
                    </ListItem>
                    <Divider variant="middle" />
                  </Fragment>
                );
              })}
            </List>
          </Collapse>
        </List>
      </MuiDrawer>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.logo} href="/" passHref>
            <Image
              src="/images/dm-logo.png"
              alt="Company Logo"
              width={85}
              height={45}
            />
          </Link>
          <nav className={classes.nav}>
            <ButtonGroup variant="text" colot="primary">
              <Button variant="text" component={Link} noLinkStyle href="/about">
                About
              </Button>
              <Button
                ref={anchorRef}
                aria-controls={menuOpen ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleNavToggle}
              >
                Practice Areas
              </Button>
              <Popper
                open={menuOpen}
                anchorEl={anchorRef.current}
                className={classes.popupMenu}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleNavClose}>
                        <MenuList
                          autoFocusItem={menuOpen}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleNavClose}>
                            Estate Planning
                          </MenuItem>
                          <MenuItem onClick={handleNavClose}>
                            Family Law
                          </MenuItem>
                          <MenuItem onClick={handleNavClose}>
                            Business Law
                          </MenuItem>
                          <MenuItem onClick={handleNavClose}>
                            Intellectual Property
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <Button
                variant="text"
                component={Link}
                noLinkStyle
                href="/contact"
              >
                Contact
              </Button>
              <Button variant="text" component={Link} noLinkStyle href="/">
                Client Portal
              </Button>
            </ButtonGroup>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
}
