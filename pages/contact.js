import {
  Box,
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import { useState } from "react";

import Footer from "../components/layouts/footer";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  root: {
    flexGrow: 1,
    "& .MuiPaper-root": {
      margin: "auto",
      marginTop: "15px",
      marginBottom: "15px",
    },
  },
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(1),
    backgroundColor: "#ccf2f4",
    textAlign: "center",
    maxWidth: "900px",
    width: "90%",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "80%",
    },
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "15%",
    color: "#ffffff",
  },
}));

export default function ContactPage() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Image
          layout="responsive"
          src="/images/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg"
          alt="Placeholder contact us image"
          width={475}
          height={175}
        />
        <Typography className={classes.title} variant="h1">
          Contact Page
        </Typography>
      </Box>
      <Paper className={classes.pageContent}>
        <Typography> Reach out for a free consultation, and tacos!</Typography>
        <form className={classes.form} autoComplete="off">
          <div>
            <TextField
              name="name"
              label="Your Name"
              onChange={handleInputChange}
              value={formValues.name}
            />
            <TextField
              name="phone"
              label="Telephone Number"
              onChange={handleInputChange}
              value={formValues.phone}
            />

            <TextField
              name="email"
              label="Email Address"
              onChange={handleInputChange}
              value={formValues.email}
            />

            <TextField
              name="message"
              label="How can we help you?"
              variant="outlined"
              multiline
              rows={4}
              onChange={handleInputChange}
              value={formValues.message}
            />
          </div>
          <Button variant="contained" onClick={submitHandler}>
            Submit
          </Button>
        </form>
      </Paper>
      {/* <section></section> */}
      <Footer />
    </div>
  );
}
