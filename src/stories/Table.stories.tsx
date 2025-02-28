import type { Meta } from '@storybook/react';

import  {VariableMonitoringTable}  from '@/features/Variables/VariableMonitoringTable';

const meta = {
    title: 'Example/Table',
    component: VariableMonitoringTable,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof VariableMonitoringTable>;

export default meta;

export const Table = () => <VariableMonitoringTable  data={{
    id: "sadsadsadsa",
    name: "paid base",
    fact: {
        dim: "млн",
        data: {
            jan: 12,
            feb: 24,
            mar: 30,
        }
    },
    plan: {
        dim: "млн",
        data: {
            jan: 12,
            feb: 24,
            mar: 30,
        }
    },
    compl: {
        dim: "%",
        data: {
            jan: 12,
            feb: 24,
            mar: 97,
        },
    },
}} />

