import type { NextPage } from "next";
import Link from "next/link";

const Page404: NextPage = () => {
  return (
    <>
    <div>Pagina non trovata!</div>
      <Link href="/" passHref className="text-pink-500 no-underline font-bold">
        Torna alla home
      </Link>
    </>
      
  )
}

export default Page404;
