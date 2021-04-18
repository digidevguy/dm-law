import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(2),
    backgroundColor: "#FFFFFF",
  },
  ctaImage: {
    [theme.breakpoints.down("sm")]: { marginTop: theme.spacing(1) },
  },
  ctaPaper: {
    padding: theme.spacing(2),
  },
}));

const CallToAction = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="section" id="call-to-action">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2">Need Help?</Typography>
          <Divider variant="middle" />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus
            vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac
            turpis egestas integer eget.
          </Typography>
        </Grid>
        <Grid className={classes.ctaImage} item xs={12} sm={6}>
          <Container>
            <Image
              src="/images/toa-heftiba-_UIVmIBB3JU-unsplash.jpg"
              alt="help iamge"
              width={250}
              height={125}
            />
          </Container>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            noLinkStyle
            href="/contact"
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallToAction;
