import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CodeIcon from "@material-ui/icons/Code";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import Avatar from "@material-ui/core/Avatar";

import Link from "../../Link";

import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "2rem",
  },
  container: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.light,
    padding: 10,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      padding: 8,
    },
    color: theme.palette.primary.main,
  },
  features: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
    },
  },
  paper: {
    marginBottom: theme.spacing(3),
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    transition:
      "transform 0.25s ease-in-out, background-color 0.40s ease-in-out",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
      transform: "scale3d(1.03, 1.03, 1)",
    },
  },
  paperDown: {
    marginTop: -1 * theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
  text: {
    fontWeight: 700,
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Features() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    badge: "Save time. Make more money.",
    "header-p1": "Our Services",
    "col1-header": "Web Design &  Development",
    "col1-desc":
      "Developing websites suitable for your digital needs. From company portfolios to sophisticated back-end systems.",
    "col2-header": "UI - UX Design",
    "col2-desc":
      "Designing interfaces for your mobile application, software or website. We make sure it looks perfect.",
    "col3-header": "e-Commerce",
    "col3-desc":
      "An online store has recently become an almost mandatory requirement for all types of businesses.",
    "col4-header": "SEO Optimization",
    "col4-desc":
      "We provide effective SEO optimization services for your site. Who doesn't want their site to rank first on Google?",
  };

  return (
    <section className={classes.section} data-aos="fade-up">
      <Container maxWidth="lg">
        <Box pt={matchesSM ? 7 : 15} pb={13}>
          <Grid container spacing={matchesSM ? 4 : 5}>
            <Grid item xs={12} lg={12}>
              <Box display="flex" height="100%">
                <Container
                  align="center"
                  maxWidth="sm"
                  className={classes.container}
                >
                  <Typography
                    align="center"
                    variant="body1"
                    className={classes.text}
                    color="primary"
                  >
                    {content["badge"]}
                  </Typography>
                  <Typography
                    align="center"
                    variant="h3"
                    className={classes.text}
                    component="h2"
                    color="textPrimary"
                    gutterBottom={true}
                  >
                    <Typography
                      variant="h3"
                      className={classes.text}
                      component="span"
                      color="textPrimary"
                    >
                      {content["header-p1"]}
                    </Typography>
                  </Typography>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} lg={12} className={classes.features}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Link href="/web-development" className={classes.link}>
                    <Paper variant="outlined" className={classes.paper}>
                      <Box p={3}>
                        <Box mb={2}>
                          <Avatar
                            variant="rounded"
                            className={classes.iconWrapper}
                          >
                            <CodeIcon />
                          </Avatar>
                        </Box>
                        <div>
                          <Typography
                            variant="h6"
                            component="h3"
                            gutterBottom={true}
                            color="textPrimary"
                            className={classes.text}
                          >
                            {content["col1-header"]}
                          </Typography>
                          <Typography
                            variant="body1"
                            className={classes.textDesc}
                            component="p"
                            color="textSecondary"
                          >
                            {content["col1-desc"]}
                          </Typography>
                        </div>
                      </Box>
                    </Paper>
                  </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Link href="/ecommerce-development" className={classes.link}>
                    <Paper variant="outlined" className={classes.paper}>
                      <Box p={3}>
                        <Box mb={2}>
                          <Avatar
                            variant="rounded"
                            className={classes.iconWrapper}
                          >
                            <StorefrontTwoToneIcon />
                          </Avatar>
                        </Box>
                        <div>
                          <Typography
                            variant="h6"
                            className={classes.text}
                            component="h3"
                            gutterBottom={true}
                          >
                            {content["col3-header"]}
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            color="textSecondary"
                          >
                            {content["col3-desc"]}
                          </Typography>
                        </div>
                      </Box>
                    </Paper>
                  </Link>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Link href="/seo" className={classes.link}>
                    <Paper variant="outlined" className={classes.paper}>
                      <Box p={3}>
                        <Box mb={2}>
                          <Avatar
                            variant="rounded"
                            className={classes.iconWrapper}
                          >
                            <TrendingUpOutlinedIcon />
                          </Avatar>
                        </Box>
                        <div>
                          <Typography
                            className={classes.text}
                            variant="h6"
                            component="h3"
                            gutterBottom={true}
                          >
                            {content["col4-header"]}
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            color="textSecondary"
                          >
                            {content["col4-desc"]}
                          </Typography>
                        </div>
                      </Box>
                    </Paper>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
