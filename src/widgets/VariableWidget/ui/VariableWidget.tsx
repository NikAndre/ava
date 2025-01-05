import {useState} from "react";
//import styles from "./VariablesPage.module.css";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import {useSelector} from "react-redux";
import {AnalysisTab} from "@/entities/Variable/ui/AnalysisTab";
import {InformationTab} from "@/entities/Variable/ui/InformationTab";
import {OptionsTab} from "@/entities/Variable/ui/OptionsTab";
import {DataTab} from "@/entities/Variable/ui/DataTab";
import {DependenciesTab} from "@/entities/Variable/ui/DependenciesTab";
import {PermissionsTab} from "@/entities/Variable/ui/PermissionsTab/ui/PermissionTab";
import {HistoryTab} from "@/entities/Variable/ui/HistoryTab";

export const VariableWidget = () => {
  const activeVariable = useSelector((store) => store.variables.activeVariable)
  const [activeTab, setActiveTab] = useState<string>('analysis')
  return (
    <>
      <Tabs defaultValue="analysis"  value={activeTab} onValueChange={(value) => setActiveTab(value)}  className="w-[400px]">
        <TabsList style={{gap:'10px'}}>
          <TabsTrigger value="analysis">Анализ</TabsTrigger>
          <TabsTrigger value="information" >Информация</TabsTrigger>
          <TabsTrigger value="options">Настройка</TabsTrigger>
          <TabsTrigger value="data">Данные</TabsTrigger>
          <TabsTrigger value="dependencies">Зависимости</TabsTrigger>
          <TabsTrigger value="permissions">Доступы</TabsTrigger>
          <TabsTrigger value="history">История изменений</TabsTrigger>
        </TabsList>
      </Tabs>

      { activeTab === 'information' && <InformationTab/> }
      { activeTab === 'analysis' && <AnalysisTab/> }
      { activeTab === 'options' && <OptionsTab/> }
      { activeTab === 'data' && <DataTab/> }
      { activeTab === 'dependencies' && <DependenciesTab/> }
      { activeTab === 'permissions' && <PermissionsTab/> }
      { activeTab === 'history' && <HistoryTab/> }
      
    </>
  );
};

