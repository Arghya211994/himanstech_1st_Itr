import React from "react";
import Footer from "./footer/Footer";
import Head from "next/head";
import Header2 from "./header/Header2";

const Layout2 = ({ children,title }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="./old_himanstech_logo.svg"></link>
        <title>{title}</title>
      </Head>
      <Header2 />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout2;
