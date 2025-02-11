import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

export const StatisticBarChart = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  axisLine={false} tickLine={false} dataKey={'name'} scale="band" />
                <YAxis   axisLine={false} tickLine={false}/>
                <Tooltip />
                <Bar barSize={20} dataKey="pv" fill="#64748b"  />
            </BarChart>
        </ResponsiveContainer>
    )
}