import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import Image from "next/image";

import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    // backgroundColor: theme.palette.grey[50],
    backgroundColor: theme.palette.heavyBlue,
  },
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  img: {
    maxWidth: 500,
    borderRadius: 0,
    border: "5px solid black",
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  name: {
    lineHeight: 1,
  },
  button: {
    borderRadius: 0,
  },
  title: {
    color: theme.palette.common.white,
  },
  desc: {
    color: theme.palette.grey[400],
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Blog() {
  const classes = useStyles();

  const content = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1628507061/ezgif.com-gif-maker_2_p2vsp9.webp",
      category: "ACCOUNTING WEBSITE",
      title: "Lonnarigo CPAs",
      desc1: "A responsive, feature-rich website for an accounting company.",
      url: "https://lonnarigocpas-public.vercel.app/",
      githubLink: "https://github.com/beswaax/lonnarigocpasPublic",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1628507060/ezgif.com-gif-maker_1_fnlpbw.webp",
      category: "CONSTRUCTION WEBSITE",
      title: "Kaiper Construction",
      url: "https://kaiperconstruction.vercel.app/",
      githubUrl: "https://github.com/beswaax/kaiperconstruction",
      desc1: "A beautiful and responsive website for a construction company.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1628507052/ezgif.com-gif-maker_cwkfom.webp",
      category: "MEDICAL WEBSITE",
      title: "Farhad Dental Care",
      url: "https://farhaddental.vercel.app/",
      githubUrl: "https://github.com/beswaax/farhaddental",
      desc1:
        "Beautiful and cleanly designed website for a dental care centre. ",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1629129061/Screenshot_from_2021-08-16_17-49-57_vn6nuj.png",
      category: "ECOMMERCE STORE",
      title: "Hempvapos",
      url: "https://ecommerce-store-beige.vercel.app/",
      githubUrl: "https://github.com/beswaax/ecommerceStore",
      desc1:
        "An fully functional E-Commerce store connected to the Commerce.js API.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1629129236/Screenshot_from_2021-08-16_17-53-00_onra9z.png",
      category: "CRUD APP",
      title: "Bloglist App with Login",
      url: "https://peaceful-jackson-fe2104.netlify.app/",
      githubUrl: "https://github.com/beswaax/blogsBackend",
      desc1:
        "A simple blog list app built with Node, Express, MongoDB and JWT.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1629224892/Screenshot_from_2021-08-17_20-26-38_iptxqp.png",
      category: "WEB DESIGN AGENCY WEBSITE",
      title: "RangoDev Web Design Agency",
      url: "https://rangojango.com/",
      githubUrl: "https://github.com/beswaax/portfolioWebsiteNew",
      desc1:
        "Website for a company specializing in web design & web development.",
    },
  ];

  return (
    <section className={classes.section} id="projects">
      <Container maxWidth="lg">
        <Box py={15}>
          <Container maxWidth="sm">
            <Box pb={10}>
              <Typography
                align="center"
                variant="h3"
                style={{ fontWeight: 600 }}
                className={classes.title}
              >
                Portfolio
              </Typography>
              <Typography
                align="center"
                variant="subtitle1"
                style={{ fontWeight: 400 }}
                className={classes.desc}
              >
                Here you can find a wide array of projects that I recently
                created.
              </Typography>
            </Box>
          </Container>

          <Grid container spacing={5} alignItems="center" justify="center">
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              className={classes.post}
              key={content[0].id}
            >
              <Box className={classes.img}>
                <Image
                  width={550}
                  height={350}
                  quality={100}
                  src={content[0]["image"]}
                  alt="portfolio piece image"
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box mb={0}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content[0]["category"]}
                  </Typography>
                </Box>
                <Link
                  href={content[0].url}
                  target="_blank"
                  className={classes.link}
                  color="inherit"
                >
                  <Typography
                    variant="h5"
                    className={classes.title}
                    component="h2"
                  >
                    {content[0]["title"]}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle1"
                  paragraph={true}
                  color="textSecondary"
                  className={classes.desc}
                >
                  {content[0]["desc1"]}
                </Typography>

                <Box mt={3} display="flex" alignItems="center">
                  <Box mr={2} textAlign="left">
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<GitHubIcon />}
                            target="_blank"
                            href="https://github.com/beswaax/lonnarigocpasPublic"
                          >
                            CODE
                          </Button>
                        </Box>{" "}
                      </Grid>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            target="_blank"
                            href="https://lonnarigocpas-public.vercel.app/"
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            endIcon={<LanguageIcon />}
                          >
                            LIVE
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              className={classes.post}
              key={content[1].id}
            >
              <Box className={classes.img}>
                <Image
                  width={550}
                  height={350}
                  quality={100}
                  src={content[1]["image"]}
                  alt="portfolio piece image"
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box mb={0}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content[1]["category"]}
                  </Typography>
                </Box>
                <Link
                  href={content[1].url}
                  className={classes.link}
                  target="_blank"
                  color="inherit"
                >
                  <Typography
                    variant="h5"
                    className={classes.title}
                    component="h2"
                  >
                    {content[1]["title"]}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle1"
                  paragraph={true}
                  className={classes.desc}
                  color="textSecondary"
                >
                  {content[1]["desc1"]}
                </Typography>

                <Box mt={3} display="flex" alignItems="center">
                  <Box mr={2} textAlign="left">
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<GitHubIcon />}
                            target="_blank"
                            href="https://github.com/beswaax/kaiperconstruction"
                          >
                            CODE
                          </Button>
                        </Box>{" "}
                      </Grid>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            target="_blank"
                            href="https://kaiperconstruction.vercel.app/"
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            endIcon={<LanguageIcon />}
                          >
                            LIVE
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              className={classes.post}
              key={content[2].id}
            >
              <Box className={classes.img}>
                <Image
                  width={550}
                  height={350}
                  quality={100}
                  src={content[2]["image"]}
                  alt="portfolio piece image"
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box mb={0}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content[2]["category"]}
                  </Typography>
                </Box>
                <Link
                  href={content[2].url}
                  className={classes.link}
                  target="_blank"
                  color="inherit"
                >
                  <Typography
                    variant="h5"
                    className={classes.title}
                    component="h2"
                  >
                    {content[2]["title"]}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle1"
                  paragraph={true}
                  className={classes.desc}
                  color="textSecondary"
                >
                  {content[2]["desc1"]}
                </Typography>

                <Box mt={3} display="flex" alignItems="center">
                  <Box mr={2} textAlign="left">
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<GitHubIcon />}
                            target="_blank"
                            href="https://github.com/beswaax/farhaddental"
                          >
                            CODE
                          </Button>
                        </Box>{" "}
                      </Grid>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            target="_blank"
                            href="https://farhaddental.vercel.app/"
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            endIcon={<LanguageIcon />}
                          >
                            LIVE
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              className={classes.post}
              key={content[3].id}
            >
              <Box className={classes.img}>
                <Image
                  width={550}
                  height={350}
                  quality={100}
                  src={content[3]["image"]}
                  alt="portfolio piece image"
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box mb={0}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content[3]["category"]}
                  </Typography>
                </Box>
                <Link
                  href={content[3].url}
                  className={classes.link}
                  target="_blank"
                  color="inherit"
                >
                  <Typography
                    variant="h5"
                    className={classes.title}
                    component="h2"
                  >
                    {content[3]["title"]}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle1"
                  paragraph={true}
                  className={classes.desc}
                  color="textSecondary"
                >
                  {content[3]["desc1"]}
                </Typography>

                <Box mt={3} display="flex" alignItems="center">
                  <Box mr={2} textAlign="left">
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<GitHubIcon />}
                            target="_blank"
                            href="https://github.com/beswaax/ecommerceStore"
                          >
                            CODE
                          </Button>
                        </Box>{" "}
                      </Grid>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            target="_blank"
                            href="https://ecommerce-store-beige.vercel.app/"
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            endIcon={<LanguageIcon />}
                          >
                            LIVE
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              className={classes.post}
              key={content[4].id}
            >
              <Box className={classes.img}>
                <Image
                  width={550}
                  height={350}
                  quality={100}
                  src={content[4]["image"]}
                  alt="portfolio piece image"
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box mb={0}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content[4]["category"]}
                  </Typography>
                </Box>
                <Link
                  href={content[4].url}
                  className={classes.link}
                  target="_blank"
                  color="inherit"
                >
                  <Typography
                    variant="h5"
                    className={classes.title}
                    component="h2"
                  >
                    {content[4]["title"]}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle1"
                  paragraph={true}
                  className={classes.desc}
                  color="textSecondary"
                >
                  {content[4]["desc1"]}
                </Typography>

                <Box mt={3} display="flex" alignItems="center">
                  <Box mr={2} textAlign="left">
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<GitHubIcon />}
                            target="_blank"
                            href="https://github.com/beswaax/blogsBackend"
                          >
                            CODE
                          </Button>
                        </Box>{" "}
                      </Grid>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            target="_blank"
                            href="https://peaceful-jackson-fe2104.netlify.app/"
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            endIcon={<LanguageIcon />}
                          >
                            LIVE
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              className={classes.post}
              key={content[5].id}
            >
              <Box className={classes.img}>
                <Image
                  width={550}
                  height={350}
                  quality={100}
                  src={content[5]["image"]}
                  alt="portfolio piece image"
                />
              </Box>
              <Box mt={2} mb={2}>
                <Box mb={0}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content[5]["category"]}
                  </Typography>
                </Box>
                <Link
                  href={content[5].url}
                  className={classes.link}
                  target="_blank"
                  color="inherit"
                >
                  <Typography
                    variant="h5"
                    className={classes.title}
                    component="h2"
                  >
                    {content[5]["title"]}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle1"
                  paragraph={true}
                  className={classes.desc}
                  color="textSecondary"
                >
                  {content[5]["desc1"]}
                </Typography>

                <Box mt={3} display="flex" alignItems="center">
                  <Box mr={2} textAlign="left">
                    <Grid container spacing={1}>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<GitHubIcon />}
                            target="_blank"
                            href="https://github.com/beswaax/portfolioWebsiteNew"
                          >
                            CODE
                          </Button>
                        </Box>{" "}
                      </Grid>
                      <Grid item>
                        <Box pt={1}>
                          <Button
                            disableRipple
                            disableTouchRipple
                            target="_blank"
                            href="https://rangojango.com/"
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            endIcon={<LanguageIcon />}
                          >
                            LIVE
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
