import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import {
  makeStyles,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    // backgroundColor: theme.palette.grey[200],
  },
  textField: {
    ["& fieldset"]: {
      borderRadius: 0,
    },
  },
  mainText: {
    fontWeight: 700,
  },
}));

export default function Contact() {
  const theme = useTheme();
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onConfirm = () => {
    //setLoading to true, so that when loading is true it will display a loading spinner instead of the text, you have to change that in the Button

    //after the request setLoading to false and show a snackbar

    //show error snackbar when there is an error.
    //show success snackbar after no error

    setLoading(true);
    Axios.get(
      "https://us-central1-portfolio-site-c033a.cloudfunctions.net/sendMail",
      {
        params: {
          name: `${firstName + " " + lastName}`,
          email: email,
          message: message,
        },
      }
    )
      .then(() => {
        setLoading(false);
        setMessage("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: theme.palette.success.main,
        });
      })
      .catch(() => {
        setLoading(false);
        setMessage("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: theme.palette.error.main,
        });
      });
  };

  const content = {
    header: "Contact me",
    description:
      "Use the form below to get in touch with me. Built with Firebase and Nodemailer.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Submit",
  };
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section} data-aos="fade-up" id="contact">
      <Container maxWidth="md">
        <Box pt={15} pb={15}>
          <Box mb={6} textAlign="center">
            <Typography
              align={matchesSM ? "center" : "left"}
              variant="h3"
              className={classes.mainText}
              component="h2"
              color="textPrimary"
              gutterBottom={true}
            >
              {content["header"]}
            </Typography>
            <Typography
              align={matchesSM ? "center" : "left"}
              variant="body1"
              color="textSecondary"
              paragraph={true}
            >
              {content["description"]}
            </Typography>
          </Box>
          <Box>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    required
                    color="primary"
                    fullWidth
                    autoComplete="fname"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    id="firstName"
                    label="First name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    required
                    color="primary"
                    fullWidth
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    id="lastName"
                    label="Last name"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    required
                    color="primary"
                    fullWidth
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    label="Email address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    required
                    multiline
                    rows={5}
                    color="primary"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    fullWidth
                    autoComplete="message"
                    name="message"
                    id="message"
                    label="Message"
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                {loading ? (
                  <Button
                    disableRipple
                    disableFocusRipple
                    fullWidth
                    disabled
                    align="center"
                    style={{ color: "black", backgroundColor: "#F7F7F7" }}
                  >
                    Sending...
                  </Button>
                ) : (
                  <Button
                    disableRipple
                    disableFocusRipple
                    disabled={
                      email.length < 3 ||
                      firstName.length === 0 ||
                      lastName.length === 0 ||
                      message.length === 0 ||
                      email.includes("@") === false ||
                      email.includes(".") === false
                    }
                    onClick={onConfirm}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["primary-action"]}
                  </Button>
                )}
              </Box>
            </form>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={alert.open}
            autoHideDuration={6000}
            ContentProps={{
              style: { backgroundColor: alert.backgroundColor },
            }}
            message={alert.message}
            onClose={() =>
              setAlert({ open: false, message: "", backgroundColor: "" })
            }
          />
        </Box>
      </Container>
    </section>
  );
}
