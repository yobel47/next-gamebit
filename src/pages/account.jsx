import React from "react";
import BottomNav from "@/components/BottomNav";
import Head from "next/head";

function account() {
  return (
    <div>
      <Head>
        <title>Account</title>
      </Head>

      <div className="mb-24 md:mb-28">
        <div className="my-4 mx-4 lg:my-5 lg:mx-5">
          <div className="text-xl sm:text-2xl font-bold border-b border-gray-200 pb-4">Account</div>
          <div className="text-lg sm:text-xl text-[#CB1F59] text-center flex items-center justify-center font-semibold h-[75vh] md:h-[73vh] lg:h-[70vh] ">
            Your account information
            <br /> will be listed here...
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default account;
