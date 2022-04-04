import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
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
                <div className="w-full h-96 mb-8">
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
                            <Legend />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#FF85B3" fill="#FF85B3" />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#9900F0" fill="#9900F0" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full h-96 mb-8">
                    <h1 className="text-center text-3xl text-blue-800">Sell VS Revenue</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={chart} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                            <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full h-96 mb-8">
                    <h1 className="text-center text-3xl text-blue-800">Investment VS Revenue</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chart}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="sell" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#247881" />
                            <Bar dataKey="revenue" stackId="a" fill="#F24A72" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;