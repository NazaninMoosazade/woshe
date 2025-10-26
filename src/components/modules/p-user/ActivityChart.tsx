'use client'

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { hour: '08', activity: 2 },
  { hour: '09', activity: 5 },
  { hour: '10', activity: 3 },
  { hour: '11', activity: 7 },
  { hour: '12', activity: 6 },
  { hour: '13', activity: 8 },
];

const ActivityChart: React.FC = () => (
  <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-4xl">
    <h2 className="text-gray-800 font-shabnam mb-4">فعالیت کاربر در طول روز</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="activity" stroke="#6366F1" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;
