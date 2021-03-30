import { Fragment } from "react";

import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
