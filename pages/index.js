import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import Card from "../components/home/Card";
import Footer from "../components/layouts/footer";
import Link from "../src/Link";
import CallToAction from "../components/shared/call-to-action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& #features": {
      backgroundColor: "#f3f4ed",
      textAlign: "center",
    },
    "& #call-to-action": {
      textAlign: "center",
      justify: "center",
    },
  },
  container: {
    position: "relative",
  },
  titleArea: {
    position: "absolute",
    top: "50%",
    left: "15%",
    color: "#ffffff",
  },
  ctaImage: {
    [theme.breakpoints.down("sm")]: { marginTop: theme.spacing(1) },
  },
  ctaPaper: {
    padding: theme.spacing(2),
  },
}));

const placeholderCardText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing diam.";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Image
          layout="responsive"
          src="/images/melinda-gimpel-xcVW_sFp4jQ-unsplash.jpg"
          alt="Lawfirm Partners picture"
          width={475}
          height={175}
        />
        <Box className={classes.titleArea}>
          <Typography variant="h1">This is the Landing title</Typography>
          <Typography variant="subtitle1">
            This is a subtitle paragraph
          </Typography>
        </Box>
      </Box>
      <Box component="section" id="features">
        <Typography variant="h3">This is the Features Section</Typography>
        <Grid container justify="center">
          <Grid item>
            <Card title="Title" description={placeholderCardText} />
          </Grid>
          <Grid item>
            <Card title="Title" description={placeholderCardText} />
          </Grid>
          <Grid item>
            <Card title="Title" description={placeholderCardText} />
          </Grid>
        </Grid>
      </Box>
      <CallToAction />
      <Footer />
    </div>
  );
}
