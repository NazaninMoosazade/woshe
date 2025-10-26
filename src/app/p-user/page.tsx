'use client'

import React from 'react';
import ClockWithUser from '@/components/modules/p-user/ClockWithUser'; 
import ActivityChart from '@/components/modules/p-user/ActivityChart';
import TasksChart from '@/components/modules/p-user/TasksChart';


function Page() {
  return (
   <div className=" bg-gray-100 p-6 flex flex-col items-center gap-6">
      <ClockWithUser />
      <ActivityChart/>
      <TasksChart/>
    </div>
  );
}

export default Page;
