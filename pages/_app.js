import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../src/components/horizontal-navs/HorizontalNav2";
import Footer from "../src/components/footers/Footer4";
import theme from "../src/theme/index";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import AOS from "aos";

import "aos/dist/aos.css";

const App = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  const findPathname = () => {
    if (router.pathname === "/") {
      return 0;
    } else if (router.pathname === "/about") {
      return 1;
    } else if (router.pathname === "/blog") {
      return 2;
    } else if (router.pathname === "/free-website-audit") {
      return 3;
    } else if (router.pathname === "/contact") {
      return 4;
    } else if (router.pathname === "/portfolio") {
      return 5;
    }
  };

  const [tabValue, setTabValue] = useState(findPathname());

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>
          #1 Web Design & Development, SEO & ECommerce Company | RangoDev
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar tabValue={tabValue} setTabValue={setTabValue} />
        <Component
          {...pageProps}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
        <Footer tabValue={tabValue} setTabValue={setTabValue} />
      </ThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
