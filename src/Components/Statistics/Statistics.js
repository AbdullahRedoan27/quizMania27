import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const [Statdata,setStatdata] = useState(0)
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(res => {
                const statisticsLoaded = res.data.data;
                const statisticsData = statisticsLoaded.map(statistics => {
                    const Total = statistics.total
                    const Name = statistics.name
                    const stats = {
                        Name: Name,
                        Total: Total
                    }
                    return stats;
                })
                setStatdata(statisticsData)
            });
    }, [])
    return (
        <div>
            <ResponsiveContainer width={"99%"} height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={Statdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;