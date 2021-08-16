import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import Image from "next/image";
import { Grow, Hidden, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    height: 512,
  },
  cardContainer: {
    boxShadow: "none",
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 0,
  },
  text: {
    fontWeight: 700,
  },
  image: {
    borderRadius: 500,
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    badge: "Pixel perfect websites/web apps | Affordable & Reliable",
    "header-p1": "Passionate about front-end development",
    "header-p2": "with RangoDev.",
    "header-p3": "A kool front end guy",
    "header-p4": "with reliance.",
    description2:
      "At RangoDev we focus on solving the real problems your business might be facing, be it increasing sales, increasing visibility or targeting the right clients. We increase revenue and ensure sustainable long-term growth for your business through powerful custom-built websites/web applications.",

    description:
      "At RangoDev we focus on solving the real problems your business might be facing, be it increasing sales, increasing visibility or targeting the right clients. We increase revenue and ensure sustainable long-term growth for your business through powerful custom-built websites/web applications.",
    image: "/assets/23.jpg",
  };

  return (
    <section data-aos="fade-up">
      <Container maxWidth="lg">
        <Box py={25}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      variant="h3"
                      component="span"
                      color="textPrimary"
                      className={classes.text}
                    >
                      {content["header-p1"]}{" "}
                    </Typography>
                    <br />
                    <Typography
                      variant="h3"
                      component="span"
                      color="textPrimary"
                      className={classes.text}
                    >
                      {content["header-p2"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      variant="h3"
                      component="span"
                      color="textPrimary"
                      className={classes.text}
                    >
                      {content["header-p3"]}{" "}
                    </Typography>
                    <br />
                    <Typography
                      variant="h3"
                      component="span"
                      color="textPrimary"
                      className={classes.text}
                    >
                      {content["header-p4"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
