import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Header1 from "../src/components/headers/Header1";

import Contact from "../src/components/contacts/Contact1";
import Contact2 from "../src/components/contacts/Contact2";
import PortfolioItems from "../src/components/content/PortfolioItems";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">Samuel Clintoc Front-end Developer Portfolio</title>
        <meta
          name="description"
          key="description"
          content="This is my simple yet awesome portfolio. Check it out if you want to see some awesome projects that I've been working on."
        />
        <meta
          name="keywords"
          content="samuel clintoc portfolio, front-end engineer portfolio, frontend developer portfolio, junior frontend developer portfolio, example portfolios frontend developer"
        />
        <meta
          property="og:title"
          content="Samuel Clintoc Front-end Developer Portfolio"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/" />

        <meta
          property="og:description"
          key="og:description"
          content="This is my simple yet awesome portfolio. Check it out if you want to see some awesome projects that I've been working on."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/" />
      </Head>
      <Header1 />

      <PortfolioItems />
      <Contact />
      <Contact2 />
    </div>
  );
};

export default LandingPage;
