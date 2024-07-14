import React from "react";
 
export default function Navbar() {
  
 
  return (
    <div className="w-full bg-orange-900 flex h-14 justify-between align-middle">
    <h1 className="font-black text-2xl font">SEVA</h1>
    <ul className="flex gap-5 font-black text-2xl">
        <li>Login</li>
        <li>Sign Up</li>
    </ul>
    </div>
  );
}