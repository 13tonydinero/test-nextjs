import "@/styles/globals.css";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/navbar"
import type { AppProps } from "next/app";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <div className="page">
      <Component {...pageProps} />

      </div>
      <Footer></Footer>
    </>
  );
}
