'use client'

import React from 'react';
import ClockWithUser from '@/components/modules/p-user/ClockWithUser'; 
import SalesChart from '@/components/modules/p-user/SalesChart';


function Page() {
  return (
   <div className=" bg-gray-100 p-6 flex flex-col items-center gap-6">
      <ClockWithUser />
      <SalesChart/>
    </div>
  );
}

export default Page;
