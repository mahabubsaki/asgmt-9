import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../Hooks/useChart';

const Dashboard = () => {
    const [chart,] = useChart()
    return (
        <div>
            <div className="w-full">
                <div className="w-full h-96 mb-8">
                    <h1 className="text-center text-3xl text-blue-800">Investment VS Revenue</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chart}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis dataKey="sell" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="investment" stroke="#4700D8" />
                            <Line type="monotone" dataKey="revenue" stroke="#F900BF" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full h-96">
                    <h1 className="text-center text-3xl text-blue-800">Investment VS Revenue</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chart}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis dataKey="sell" />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#FF85B3" />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#9900F0" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;