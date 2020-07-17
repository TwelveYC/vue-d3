export default [
    {
        path: "/example",
        name: "example1",
        component: () => import("@/views/Examples/Example1"),
        meta:{
            title: "Example1"
        }
    },
]