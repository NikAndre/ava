import {StatisticTable} from "@/features/Admin/StatisticTable";
import {StatisticComposedChart} from "@/features/Admin/StatisticComposedChart";
import {StatisticBarChart} from "@/features/Admin/StatisticBarChart";

const data =[
  {
    name: 'Page 1',
    uv: 4000,
    pv: 2400,
    amt: 20,
  },
  {
    name: 'Page 2',
    uv: 3000,
    pv: 1398,
    amt: 10,
  },
  {
    name: 'Page 3',
    uv: 2000,
    pv: 9800,
    amt: 100,
  },
  {
    name: 'Page 4',
    uv: 4000,
    pv: 2400,
    amt: 50,
  },
  {
    name: 'Page 5',
    uv: 3000,
    pv: 1398,
    amt: 40,
  },
  {
    name: 'Page 6',
    uv: 2000,
    pv: 9800,
    amt: 36,
  },
  {
    name: 'Page 7',
    uv: 4000,
    pv: 2400,
    amt: 95,
  },
  {
    name: 'Page 8',
    uv: 3000,
    pv: 1398,
    amt: 80,
  },
  {
    name: 'Page 9',
    uv: 2000,
    pv: 9800,
    amt: 70,
  },
  {
    name: 'Page 10',
    uv: 4000,
    pv: 2400,
    amt: 60,
  },
  {
    name: 'Page 11',
    uv: 3000,
    pv: 1398,
    amt: 55,
  },
  {
    name: 'Page 12',
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