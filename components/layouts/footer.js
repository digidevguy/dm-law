import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#222831",
    color: "#FFFFFF",
    position: "relative",
    bottom: 0,
    width: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    "& button": {
      color: "#FFFFFF",
    },
    "& a": {
      color: "#FFFFFF",
    },
  },
  links: {},
}));

export default function footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <ButtonGroup>
          <Button variant="text" component={Link} noLinkStyle href="/">
            <FacebookIcon />
          </Button>
          <Button variant="text" component={Link} noLinkStyle href="/">
            <LinkedInIcon />
          </Button>
        </ButtonGroup>
      </Container>
      <div className={classes.links}>
        <ButtonGroup variant="text" colot="primary">
          <Button variant="text" component={Link} noLinkStyle href="/">
            Home
          </Button>
          <Button variant="text" component={Link} noLinkStyle href="/about">
            About
          </Button>
          <Button>Practice Areas</Button>
          <Button variant="text" component={Link} noLinkStyle href="/contact">
            Contact
          </Button>
          <Button variant="text" component={Link} noLinkStyle href="/">
            Client Portal
          </Button>
        </ButtonGroup>
      </div>
      <Typography variant="caption">
        Copyright © 'til the end of time
      </Typography>
    </footer>
  );
}
