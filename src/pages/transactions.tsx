import React from "react";
import BottomNav from "@/components/BottomNav";
import Head from 'next/head';

function transactions() {
  return (
    <div>
      <Head>
        <title>Transactions</title>
      </Head>

      <div className='mb-24 md:mb-28'>
        <div className='my-4 mx-4 lg:my-5 lg:mx-5'>
          <div className="text-xl sm:text-2xl font-bold border-b border-gray-200 pb-4">Transactions</div>
          <div className="text-lg sm:text-xl text-[#CB1F59] flex items-center justify-center font-semibold h-[75vh] md:h-[73vh] lg:h-[70vh] ">There is no transaction yet...</div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default transactions;
