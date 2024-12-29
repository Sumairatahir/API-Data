
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Header />
      <div className="text-center my-5 flex flex-col items-center space-y-12">
        
        <Link
          href="/ProductList"
          className="bg-blue-400 text-white px-6 py-3 rounded-lg font-bold transition duration-300 hover:bg-blue-700"
        >
          Client side
        </Link>
        

        
         <Link 
           href="/Bookgrid"className="bg-pink-300 text-white px-6 py-3 rounded-lg font-bold transition duration-300 hover:bg-pink-500">
           Server side
        </Link> 
      </div>
      <Footer />
    </div>
  );
};

export default Page;
