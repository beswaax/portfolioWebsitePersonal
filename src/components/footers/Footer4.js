import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.heavyBlue,
  },
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
  },
  footerLink: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#b5b8bc",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
    "&:hover": {
      color: "#e3e8ef",
      textDecoration: "none",
    },
  },
  footerCopy: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.grey[500],
  },
  copy: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
    },
    fontFamily: "DM Sans, sans-serif",
    color: "#b5b8bc",
    fontSize: "14px",
    lineHeight: "24px",
  },
  icons: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  icon: {
    color: theme.palette.primary.main,
    borderRadius: 7,
    padding: 8,
    backgroundColor: "#383838",
    "&:hover": {
      backgroundColor: "#202023",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  const content = {
    brand: {
      image: "/assets/logo2/vector/default-monochrome-white.svg",
      width: 200,
    },
    copy: "© 2021 Samuel Clintoc's Portfolio.",
    link1: "About",
    link2: "Projects",
    link3: "Contact",
    link4: "Resume",
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="logo" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box
          pt={6}
          pb={2}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link href="/" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" ml="auto" className={classes.footerNav}>
            <Link href="/#about" variant="body1" className={classes.footerLink}>
              {content["link1"]}
            </Link>
            <Link
              href="/#projects"
              variant="body1"
              className={classes.footerLink}
            >
              {content["link2"]}
            </Link>
            <Link
              href="/#contact"
              variant="body1"
              className={classes.footerLink}
            >
              {content["link3"]}
            </Link>
            <Link
              href="https://drive.google.com/file/d/1z4v4HvMePdrs-QSGXAXHZ2BWBg22jNAK/view?usp=sharing"
              target="_blank"
              variant="body1"
              className={classes.footerLink}
            >
              {content["link4"]}
            </Link>
          </Box>
        </Box>
        <Box
          pt={1}
          pb={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.footerCopy}
        >
          <Typography
            component="p"
            gutterBottom={false}
            className={classes.copy}
          >
            {content["copy"]}
          </Typography>
          <Box ml="auto" className={classes.icons}>
            <IconButton
              disableRipple
              target="_blank"
              style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
              className={classes.icon}
              aria-label="Instagram"
              href="https://www.linkedin.com/in/samuel-clintoc-090398204/"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
