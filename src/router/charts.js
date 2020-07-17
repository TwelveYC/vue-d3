export default [
    {
        path: "/charts/line-chart",
        name: "line-chart",
        component: () => import("@/views/Charts/LineChart"),
        meta:{
            title: "Line Chart"
        }
    },
    {
        path: "/charts/bar-chart",
        name: 'bar-chart',
        component: () => import("@/views/Charts/BarChart"),
        meta:{
            title: "Bar Chart"
        }
    },
]