import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "../../Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useRouter } from "next/router";
import { Typography, useTheme, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.heavyBlue,
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none",
  },
  toolbar: {
    minHeight: 70,
  },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  link: {
    textDecoration: "none",
    marginRight: theme.spacing(5),
    color: theme.palette.grey[100],
    transition: "color 0.25s ease-in-out",

    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(3.5),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.grey[400],
      textDecoration: "none",
    },
  },
  linkDifferent: {
    marginRight: "auto",
    color: theme.palette.grey[100],
    transition: "color 0.25s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.grey[400],
      textDecoration: "none",
    },
  },
  linkSelectedDifferent: {
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    color: theme.palette.common.white,
    "&:hover": {
      color: [theme.palette.common.white],
      textDecoration: "none",
    },
  },
  linkSelected: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    color: theme.palette.common.white,
    "&:hover": {
      color: [theme.palette.common.white],
      textDecoration: "none",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 240,
  },
  listItem: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  calendlyListItem: {
    marginTop: "0.2rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
  calendlyLink: {
    textDecoration: "none",
    fontWeight: 600,
    borderBottomRightRadius: 0,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.grey[200],
      textDecoration: "none",
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  listItemSmaller: {
    paddingLeft: "2rem",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    borderRadius: 1,
  },
  collapseContainer: {
    backgroundImage: [theme.palette.grey[200]],
  },
  anchorLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  anchorLink2: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [state, setState] = React.useState({ open: false });

  const closeCollapseAndMenu = () => {
    setState({ open: !state.open });
    setOpenCollapse(!openCollapse);
  };

  function handleOpenSettings() {
    setOpenCollapse(!openCollapse);
  }

  const content = {
    brand: {
      image: "/assets/logo2/vector/default-monochrome-white.svg",
      width: 210,
    },
    drawerBrand: "/assets/logo2/vector/logo-single.svg",
    link0: "Home",
    link1: "About",
    link2: "Projects",
    link3: "Contact",
    link4: "Resume",
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="logo of RangoDev"
        width={content.brand.width}
      />
    );
  } else {
    brand = content.brand.text || "";
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <AnchorLink className={classes.brand} href="#home">
            {brand}
          </AnchorLink>

          <AnchorLink className={classes.anchorLink} href="#home">
            <Typography
              color="textPrimary"
              variant="body1"
              className={classes.link}
            >
              {content["link0"]}
            </Typography>
          </AnchorLink>

          <AnchorLink className={classes.anchorLink} href="#about">
            <Typography
              color="textPrimary"
              variant="body1"
              className={classes.link}
            >
              {content["link1"]}
            </Typography>
          </AnchorLink>

          <AnchorLink className={classes.anchorLink} href="#projects">
            <Typography
              color="textPrimary"
              variant="body1"
              className={classes.link}
            >
              {content["link2"]}
            </Typography>
          </AnchorLink>
          <AnchorLink className={classes.anchorLink} href="#contact">
            <Typography
              color="textPrimary"
              variant="body1"
              className={classes.link}
            >
              {content["link3"]}
            </Typography>
          </AnchorLink>

          <Link
            href="https://drive.google.com/file/d/1z4v4HvMePdrs-QSGXAXHZ2BWBg22jNAK/view?usp=sharing"
            target="_blank"
            color="textPrimary"
            variant="body1"
            className={classes.link}
          >
            {content["link4"]}
          </Link>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disableRipple
            disableTouchRipple
            className={classes.menuButton}
            onClick={toggleDrawer(!state.open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box
            mb={1}
            ml={2}
            pb={2}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
          >
            <Link
              href="/#home"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              <img
                src={content.drawerBrand}
                alt={"logo of Samuel's Folio"}
                width={content.brand.width}
              />{" "}
            </Link>
          </Box>
          <List>
            <AnchorLink className={classes.anchorLink2} href="#home">
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link0"]}
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link0"]} />
              </ListItem>
            </AnchorLink>

            <AnchorLink className={classes.anchorLink2} href="#about">
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link1"]}
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link1"]} />
              </ListItem>
            </AnchorLink>

            <AnchorLink className={classes.anchorLink2} href="#projects">
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link2"]}
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link2"]} />
              </ListItem>
            </AnchorLink>

            <AnchorLink className={classes.anchorLink2} href="#contact">
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link3"]}
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link3"]} />
              </ListItem>
            </AnchorLink>

            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link2"]}
              component={Link}
              href="https://drive.google.com/file/d/1z4v4HvMePdrs-QSGXAXHZ2BWBg22jNAK/view?usp=sharing"
              target="_blank"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link4"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
