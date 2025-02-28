import type { Meta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";
import  {MonitoringTab}  from '@/entities/Variable/ui/MonitoringTab';
import { Provider } from "react-redux";
import { store } from "@/shared/store/";

const meta = {
    title: 'Example/Tab',
    component: MonitoringTab,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [(story) => <BrowserRouter><Provider store={store}>{story()}</Provider></BrowserRouter>],
} satisfies Meta<typeof MonitoringTab>;

export default meta;

export const MonitoringTabStory = ()=> {
    return (
        <MonitoringTab/>
)}