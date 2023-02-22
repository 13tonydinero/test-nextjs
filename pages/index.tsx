import { Inter } from "@next/font/google";
import test from "../styles/test.module.css";
import { FirstComponent } from "../components/firstComponent";
import Image from "next/image";
import image from "/public/images/homelander.jpg";
import Head from "next/head";
const css: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export default function Home() {
  return (
    <>
      {/* <div style={css}>
      <h1 className='animate__animated animate__tada animate__repeat-2 '>Hi Hitler</h1>
      <button className={test.button}>oPPP</button>
      <button className='btn btn-primary'>ok</button>
      <h1 className="text-3xl font-bold underline text-pink-700">
      Hello world!
    </h1>
    <Image src={image} width={1000} height={100} alt="" layout='intrinsic' placeholder='blur' onLoadingComplete={FirstComponent}/>
      <FirstComponent/>
    </div> */}
      <Head>
        <title>Mio Padre JS</title>
        <meta name="description" content="Questo e' il sito di mio padre" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
        <Image
          src={image}
          width={300}
          height={300}
          alt="Mio padre in CSS"
          placeholder="blur"
        />
        <h1 className="title">Next Js + Tailwind CSS</h1>
        <button className="transition-all duration-150 border border-black rounded-lg p-2 hover:bg-orange-500">Bottone Supremo</button>
    </>
  );
}
