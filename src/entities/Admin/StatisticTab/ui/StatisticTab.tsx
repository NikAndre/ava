import {StatisticComposedChart} from "@/features/Admin/StatisticComposedChart";
import {StatisticBarChart} from "@/features/Admin/StatisticBarChart";

const data =[
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 20,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 10,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 100,
  },
  {
    name: 'Apr',
    uv: 4000,
    pv: 2400,
    amt: 50,
  },
  {
    name: 'May',
    uv: 3000,
    pv: 1398,
    amt: 40,
  },
  {
    name: 'June',
    uv: 2000,
    pv: 9800,
    amt: 36,
  },
  {
    name: 'Jul',
    uv: 4000,
    pv: 2400,
    amt: 95,
  },
  {
    name: 'Aug',
    uv: 3000,
    pv: 1398,
    amt: 80,
  },
  {
    name: 'Sept',
    uv: 2000,
    pv: 9800,
    amt: 70,
  },
  {
    name: 'Oct',
    uv: 4000,
    pv: 2400,
    amt: 60,
  },
  {
    name: 'Nov',
    uv: 3000,
    pv: 1398,
    amt: 55,
  },
  {
    name: 'Dec',
    uv: 2000,
    pv: 9800,
    amt: 45,
  },
]

export const StatisticTab = () => {
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <div style={{width: '100%', height: '273px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 20px'}}>
          <p style={{fontSize: '18px'}}>Пользователей 22, из них активных 10, доля активных 45%</p>
          <div style={{width: '100%', height: '233px'}}>
            <StatisticComposedChart data={data} />
          </div>
        </div>
        <div style={{display: 'flex', gap: '16px', width: '100%', height: '273px'}}>
          <div style={{width: '50%', height: '260px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 20px'}}>
            <p style={{fontSize: '18px'}}>Метрик 22, из них опубликовано 10, доля опубликованных 45%</p>
            <div style={{width: '100%', height: '210px'}}>
              <StatisticComposedChart data={data} />
            </div>
          </div>
          <div style={{width: '50%', height: '260px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 20px'}}>
            <p style={{fontSize: '18px'}}>Моделей 22, из них опубликовано 10, доля опубликованных 45%</p>
            <div style={{width: '100%', height: '210px'}}>
              <StatisticComposedChart data={data} />
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '16px', width: '100%', height: '273px'}}>
          <div style={{width: '50%', height: '260px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 20px'}}>
            <p style={{fontSize: '18px', marginBottom: '5px'}}>Сценариев 22</p>
            <div style={{width: '100%', height: '210px'}}>
              <StatisticBarChart data={data} />
            </div>
          </div>
          <div style={{width: '50%', height: '260px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 20px'}}>
            <p style={{fontSize: '18px'}}>Тегов 22, из них используется 10, доля используемых 45%</p>
            <div style={{width: '100%', height: '210px'}}>
              <StatisticComposedChart data={data} />
            </div>
          </div>
        </div>
      </div>
  )
}