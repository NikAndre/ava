import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import {PureComponent} from "react";


class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y-10} dy={-4} fill={stroke} fontSize={14} textAnchor="middle">
                {value + '%'}
            </text>
        );
    }
}

export const StatisticComposedChart = ({data}) => {
    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 40,
                    right: 20,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis  dataKey={'name'}  axisLine={false} tickLine={false} />
                <YAxis  dataKey={'pv'}  axisLine={false} tickLine={false}/>
                <YAxis  dataKey={'uv'}   axisLine={false} tickLine={false}/>
                <YAxis yAxisId={1} tick={false} domain={['dataMin', 'dataMax']} orientation={'right'} dataKey={'amt'}  axisLine={false} tickLine={false}/>
                <Tooltip />
                <Bar barSize={20} dataKey="pv" fill="#64748b"   />
                <Bar barSize={20} dataKey="uv" fill="#06b6d4"   />
                <Line
                    yAxisId={1}
                    type="monotone"
                    strokeWidth={3}
                    dot={{ stroke: '#facc15', strokeWidth: 6, }}
                    activeDot={{ stroke: '#facc15', strokeWidth: 2, r: 10 }}
                    dataKey="amt"
                    stroke="#facc15"
                    label={<CustomizedLabel />}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}