import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div className="flex gap-15">
       
        <Link href="/" className="links">
          Home
        </Link>
        <Link href="/about" className="links">
          About
        </Link>
        <Link href="/dashboard" className="links">
          Dashboard
        </Link>
        <Link href="/dashboard" className="links">
          Contact
        </Link>
      </div>
      <div>
        <h1 className="bg-">Contact</h1>
      </div>
    </div>
  );
};

export default navbar;
