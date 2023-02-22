import React  from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="sm:fixed sm:z-10 top-0 w-full text-center flex flex-col sm:flex-row gap-2 justify-center p-2">
      <Link href="/" className="text-2xl cursor-pointer">Home 
      </Link>
      <Link href="/catalog"className="text-2xl cursor-pointer"> Catalog 
      </Link>
      <Link href="/contacts"className="text-2xl cursor-pointer"> Contacts 
      </Link>
    </nav>
  )
};

export default NavBar;