import {VariablesType} from "@/features/Variables/VariableDependeciesUsageTable/ui/VariableDependeciesTable";
import {VariableDependeciesTable} from "@/features/Variables/VariableDependeciesTable";

const usageData: VariablesType[] = [
  {
    id: '21312уу21',
    variableName: "revenue product X",
    date: 'Сентябрь 2024',
    owner: "Денис Зайцев",
  }
]
const influenceData: VariablesType[] = [
  {
    id: '21312уу21',
    variableName: "pb prev m",
    date: 'Сентябрь 2024',
    owner: "Денис Зайцев",
  }
]

export const DependenciesTab = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
        height: '100%'
      }}
    >
      <div style={{
        border: '1px solid #CBD5E1',
        borderRadius: '6px',
        width: '50%',
        padding: '11px 13px',
        height: '100%'
      }}>
        <p style={{ marginBottom: '25px'}}>Список метрик, использующих paid base eop</p>
        <VariableDependeciesTable data={usageData}/>
      </div>
      <div
        style={{
          border: '1px solid #CBD5E1',
          borderRadius: '6px',
          width: '50%',
          padding: '11px 13px'
        }}
      >
        <p style={{ marginBottom: '25px'}}>Список метрик, влияющих на paid base eop</p>
        <VariableDependeciesTable data={influenceData}/>
      </div>
    </div>
  );
};