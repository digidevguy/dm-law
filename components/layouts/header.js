import { useRouter } from 'next/router';
import Link from '../../src/Link';
import Image from 'next/image';
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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect, useRef, useState } from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import NestedMenuItem from 'material-ui-nested-menu-item';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logo: {
		padding: theme.spacing(2),
	},
	menuButton: {
		marginRight: theme.spacing(2),
		display: 'none',
		[theme.breakpoints.down('xs')]: { display: 'block' },
	},
	nav: {
		'& button': {
			color: '#000000',
		},
		'& a': {
			color: '#000000',
		},
		marginLeft: 'auto',
		[theme.breakpoints.down('xs')]: { display: 'none' },
	},
	text: {
		color: '#00303f',
	},
	drawer: {
		width: '202px',
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
	const [menuPosition, setMenuPosition] = useState(null);

	//Practice Area state objects
	const [blOpen, setBLOpen] = useState(false);
	const [estateOpen, setestateOpen] = useState(false);
	const [ipOpen, setIPOpen] = useState(false);

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

	const handleNavClick = (e, route) => {
		e.preventDefault();
		router.push(route);
		setMenuOpen(false);
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
		if (e.key === 'Tab') {
			e.preventDefault();
			setMenuOpen(false);
		}
	}

	const handleItemClick = (e) => {
		if (menuPosition) {
			return;
		}
		event.preventDefault();
		setMenuPosition({ top: e.pageY, left: pageX });
	};

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
					<ListItem
						button
						onClick={(e) => {
							handleClick(e, '/');
						}}
					>
						<ListItemText primary='Home' />
					</ListItem>
					<Divider variant='middle' />
					<ListItem
						button
						onClick={(e) => {
							handleClick(e, '/about');
						}}
					>
						<ListItemText primary='About' />
					</ListItem>

					<Divider variant='middle' />

					{/* potential */}
					<ListItem button onClick={handleMenuClick}>
						<ListItemText primary='Practice Areas' />
						{nestedOpen ? <ExpandMore /> : <ExpandLess />}
					</ListItem>
					<Divider variant='middle' />
					<Collapse in={nestedOpen} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<ListItem
								button
								onClick={(e) => {
									handleClick(e, '/practice-area/wills-and-trusts');
								}}
							>
								<ListItemText primary='Wills & Trusts' />
							</ListItem>
							<Divider variant='middle' />
							<ListItem
								button
								onClick={(e) => {
									handleClick(e, '/practice-area/probate');
								}}
							>
								<ListItemText primary='Probate' />
							</ListItem>
							<Divider variant='middle' />

							<ListItem
								button
								onClick={(e) => {
									handleClick(e, '/practice-area/family');
								}}
							>
								<ListItemText primary='Family Law' />
							</ListItem>
							<Divider variant='middle' />
							<ListItem
								button
								onClick={() => {
									setIPOpen(!ipOpen);
								}}
							>
								<ListItemText primary='Intellectual Property' />
								{ipOpen ? <ExpandMore /> : <ExpandLess />}
							</ListItem>
							<Divider variant='middle' />
							<Collapse in={ipOpen} timeout='auto' unmountOnExit>
								<List>
									<ListItem
										button
										onClick={(e) => {
											handleClick(e, '/practice-area/trademark');
										}}
									>
										<ListItemText primary='Trademark' />
									</ListItem>
									<Divider variant='middle' />
									<ListItem
										button
										onClick={(e) => {
											handleClick(e, '/practice-area/trade-secrets');
										}}
									>
										<ListItemText primary='Trade Secrets' />
									</ListItem>
								</List>
							</Collapse>
							<ListItem
								button
								onClick={() => {
									setBLOpen(!blOpen);
								}}
							>
								<ListItemText primary='Business Law' />
								{blOpen ? <ExpandMore /> : <ExpandLess />}
							</ListItem>
							<Divider variant='middle' />
							<Collapse in={blOpen} timeoute='auto' unmountOnExit>
								<List>
									<ListItem
										button
										onClick={(e) => {
											handleClick(e, '/practice-area/business-formation');
										}}
									>
										<ListItemText primary='Business Formation' />
									</ListItem>
									<Divider variant='middle' />
									<ListItem
										button
										onClick={(e) => {
											handleClick(e, '/practice-area/noncompete-nda');
										}}
									>
										<ListItemText primary='Non-Compete - NDA' />
									</ListItem>
								</List>
							</Collapse>
							<Divider variant='middle' />
						</List>
					</Collapse>
					<Divider variant='middle' />
					<ListItem
						button
						onClick={(e) => {
							handleClick(e, '/contact');
						}}
					>
						<ListItemText primary='Contact Us' />
					</ListItem>
					<Divider variant='middle' />
					<ListItem
						button
						onClick={(e) => {
							handleClick(e, 'https://app.clio.com/client_connect/');
						}}
					>
						<ListItemText primary='Client Portal' />
					</ListItem>
				</List>
			</MuiDrawer>
			<AppBar position='static' color='transparent'>
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						edge='start'
						color='inherit'
						aria-label='menu'
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</IconButton>
					<Link className={classes.logo} href='/' passHref>
						<Image
							src='/images/dm-logo.png'
							alt='Company Logo'
							width={85}
							height={45}
						/>
					</Link>
					<nav className={classes.nav}>
						<ButtonGroup variant='text' color='primary'>
							<Button variant='text' component={Link} noLinkStyle href='/'>
								Home
							</Button>
							<Button variant='text' component={Link} noLinkStyle href='/about'>
								About
							</Button>
							<Button
								ref={anchorRef}
								aria-controls={menuOpen ? 'menu-list-grow' : undefined}
								aria-haspopup='true'
								onClick={handleNavToggle}
							>
								Practice Areas
							</Button>

							<Button
								variant='text'
								component={Link}
								noLinkStyle
								href='/contact'
							>
								Contact
							</Button>
							<Button
								variant='text'
								component={Link}
								noLinkStyle
								href='https://app.clio.com/client_connect/'
							>
								Client Portal
							</Button>
						</ButtonGroup>
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
											placement === 'bottom' ? 'center top' : 'center bottom',
									}}
								>
									<Paper>
										<ClickAwayListener onClickAway={handleNavClose}>
											<MenuList
												autoFocusItem={menuOpen}
												id='menu-list-grow'
												onKeyDown={handleListKeyDown}
											>
												<MenuItem
													onClick={(e) => {
														handleNavClick(
															e,
															'/practice-area/wills-and-trusts'
														);
													}}
												>
													Wills & Trusts
												</MenuItem>
												<MenuItem
													onClick={(e) => {
														handleNavClick(e, '/practice-area/probate');
													}}
												>
													Probate
												</MenuItem>
												<MenuItem
													onClick={(e) => {
														handleNavClick(e, '/practice-area/family');
													}}
												>
													Family Law
												</MenuItem>
												<NestedMenuItem
													label='Intellectual Property'
													parentMenuOpen={!!menuOpen}
												>
													<MenuItem
														onClick={(e) => {
															handleNavClick(e, '/practice-area/trademark');
														}}
													>
														Trademark
													</MenuItem>
													<MenuItem
														onClick={(e) => {
															handleNavClick(e, '/practice-area/trade-secrets');
														}}
													>
														Trade Secrets
													</MenuItem>
												</NestedMenuItem>
												<NestedMenuItem
													label='Business Law'
													parentMenuOpen={!!menuOpen}
												>
													<MenuItem
														onClick={(e) => {
															handleNavClick(
																e,
																'/practice-area/business-formation'
															);
														}}
													>
														Business Formation
													</MenuItem>
													<MenuItem
														onClick={(e) => {
															handleNavClick(
																e,
																'/practice-area/noncompete-nda'
															);
														}}
													>
														Non-Compete - NDA
													</MenuItem>
												</NestedMenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</nav>
				</Toolbar>
			</AppBar>
		</header>
	);
}
