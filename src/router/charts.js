export default [
    {
        path: "/charts/line-chart",
        name: "line-chart",
        component: () => import("@/views/Charts/LineChart")
    },
    {
        path: "/charts/bar-chart",
        name: 'bar-chart',
        component: () => import("@/views/Charts/BarChart")
    },
]