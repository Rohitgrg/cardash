import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const ChartView = () => {
    const data = [
      { name: "Aug", uv: 400, pv: 2400, amt: 2400 },
      { name: "Sep", uv: 300, pv: 2400, amt: 2400 },
      { name: "Nov", uv: 250, pv: 2400, amt: 2400 },
      { name: "Dec", uv: 200, pv: 2400, amt: 2400 },
      { name: "Jan", uv: 188, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 150, pv: 2400, amt: 2400 },
    ];
  return (
    <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center mb-4">
      <div className="my-1">Performance vs Time</div>
      <LineChart width={300} height={320} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="rgb(226,232,240)" />
        <XAxis stroke="rgb(226,232,240)" dataKey="name" />
        <YAxis stroke="rgb(226,232,240)" />
      </LineChart>
    </div>
  );
};

export default ChartView;
