'use client'

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { hour: '08', sales: 1200000 },
  { hour: '09', sales: 3400000 },
  { hour: '10', sales: 2100000 },
  { hour: '11', sales: 4800000 },
  { hour: '12', sales: 3600000 },
  { hour: '13', sales: 5200000 },
];

const SalesChart: React.FC = () => (
  <div className="bg-white mt-20 shadow-lg rounded-xl p-4 w-full max-w-4xl">
    <h2 className="text-gray-800 font-shabnam mb-4">آمار فروش در طول روز</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" label={{ value: 'ساعت', position: 'insideBottomRight', offset: -5 }} />
        <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
        <Tooltip formatter={(value: number) => `${value.toLocaleString()} تومان`} />
        <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesChart;
