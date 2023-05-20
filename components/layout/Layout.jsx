import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";

const Layout = ({ children,title }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="./old_himanstech_logo.svg"></link>
        {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
        </script> */}
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
