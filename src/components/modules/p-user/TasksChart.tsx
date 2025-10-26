'use client'

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { task: 'انجام شده', count: 8 },
  { task: 'در حال انجام', count: 5 },
  { task: 'انجام نشده', count: 2 },
];

const TasksChart: React.FC = () => (
  <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-4xl">
    <h2 className="text-gray-800 font-shabnam mb-4">وضعیت وظایف</h2>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} className='font-shabnam'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="task" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TasksChart;
