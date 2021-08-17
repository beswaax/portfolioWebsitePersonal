import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23b2b2bd' fill-opacity='0.02'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundColor: theme.palette.heavyBlue,
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(25),
      paddingBottom: theme.spacing(25),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
    },
  },
  description: {
    color: theme.palette.grey[400],
    fontWeight: 400,
  },
  primaryButton: {
    fontWeight: 500,
    borderBottomRightRadius: 0,
    color: theme.palette.common.white,

    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 9,
      paddingBottom: 9,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  secondaryButton: {
    fontWeight: 500,
    borderBottomRightRadius: 0,
    color: theme.palette.common.white,
    border: "2px solid gray",
    backgroundColor: theme.palette.heavyBlue,
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
      fontWeight: 600,
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 9,
      paddingBottom: 9,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  extra: {
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 700,
  },
}));

export default function Header() {
  const classes = useStyles();

  const content = {
    "header-p1": "We *build and *rank",
    "header-p2": "custom-built  sites",
    description:
      "I'm a self-taught developer currently located in Germany and I am pursuing the opportunity to begin my career in the web development industry.",
    "primary-action": "MY RESUME",
    "secondary-action": "CONTACT",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white" py={5}>
          <Typography variant="h2" component="h1" gutterBottom={true}>
            <Typography variant="h2" component="span" className={classes.title}>
              Hi, my name is Samuel Clintoc
            </Typography>
            <br />
            <Typography variant="h2" component="span" className={classes.title}>
              I am a <span className={classes.extra}>Front-end Engineer</span>
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              component="h2"
              color="textSecondary"
              paragraph={true}
              className={classes.description}
            >
              {content["description"]}
            </Typography>
          </Container>
          <Box mt={3}>
            <Button
              variant="contained"
              component={Link}
              fullWidth={false}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              href="https://drive.google.com/file/d/1z4v4HvMePdrs-QSGXAXHZ2BWBg22jNAK/view?usp=sharing"
              target="_blank"
              className={classes.secondaryButton}
            >
              {content["primary-action"]}
            </Button>
            <Button
              variant="contained"
              component={Link}
              fullWidth={false}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              href="/#contact"
              className={classes.primaryButton}
            >
              {content["secondary-action"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
