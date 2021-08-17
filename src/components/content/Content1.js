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

const useStyles = makeStyles((theme) => ({
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
  gridContainerItem: {
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    badge: "Pixel perfect websites/web apps | Affordable & Reliable",
    "header-p1": "A little about me...",
    "header-p2": "Skills",
    description:
      "My name is Samuel Clintoc and I'm a passionate Frontend Web Developer using web technologies to build amazing products and focusing on solving probelms for different niches and different industries using the power of technology.",
    description2: [
      "JAVASCRIPT",
      "REACT",
      "GIT",
      "NEXTJS",
      "MATERIAL-UI",
      "HTML",
      "CSS",
    ],
    description3: "I will love to hear from you. Feel free to contact me.",
    image: "/assets/23.jpg",
  };

  return (
    <section data-aos="fade-up" id="about">
      <Container maxWidth="lg">
        <Box py={matchesXS ? 8 : matchesSM ? 10 : 25}>
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
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description3"]}
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
                      {content["header-p2"]}{" "}
                    </Typography>
                  </Typography>
                  <Grid container spacing={1}>
                    {content["description2"].map((desc, i) => (
                      <Grid item sm={3} xs={5}>
                        <Typography
                          style={{
                            fontWeight: 500,
                            padding: 10,
                            backgroundColor: theme.palette.grey[200],
                          }}
                          align="center"
                          variant="body1"
                          color="textPrimary"
                          paragraph={true}
                        >
                          {desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
