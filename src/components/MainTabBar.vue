<template>
    <div class="menu-box">
        <div class="logo-box">
            <img src="@/assets/images/d3-logo.png" alt="d3" class="logo-img">
            <img src="@/assets/images/vue-logo.png" alt="vue" class="logo-img">
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
            <el-menu-item index="/">Home</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Components</template>
                <el-menu-item v-for="(item, index) in chartTypes" :index="item.href" :key="index">
                    <a :href="item.href" class="el-menu-item">{{item.name}}</a>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">Example</template>
                <el-menu-item v-for="(item, index) in examples" :index="item.href" :key="index">{{item.name}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="4"><a href="https://github.com/TwelveYC/vue-d3" target="_blank" title="Please Star Me">GitHub</a></el-menu-item>
        </el-menu>
        <img src="@/assets/images/forkme.png" alt="" class="forkme">
    </div>
</template>

<script>
    export default {
        name: "MainTabBar",
        data() {
            return {
                activeIndex: '1',
                chartTypes: [{
                    name: "svgBasic",
                    href: "/svg-basic"
                },{
                    name: "lineChart",
                    href: "/charts/line-chart",
                },
                {
                    name: "barChart",
                    href: "/charts/bar-chart",
                },
                {
                    name: "scatterChart",
                    href: "https://www.baidu.com/",
                },
                {
                    name: "pieChart",
                    href: "https://www.baidu.com/",
                },{
                    name: "map",
                    href: "https://www.baidu.com/",
                },{
                    name: "Candlestick",
                    href: "https://www.baidu.com/",
                },{
                    name: "radar",
                    href: "https://www.baidu.com/",
                },{
                    name: "tree",
                    href: "https://www.baidu.com/",
                },{
                    name: "graph",
                    href: "https://www.baidu.com/",
                },{
                    name: "sunburst",
                    href: "https://www.baidu.com/",
                },{
                    name: "parallel",
                    href: "https://www.baidu.com/",
                }],
                examples: [{
                    name: "Example1",
                    href: "/example"
                },{
                    name: "Example2",
                    href: "/example",
                },{
                    name: "Example3",
                    href: "/example",
                }]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<style scoped>
    .menu-box{
        display: flex;
        justify-content: space-between;
        margin-right: 110px;
    }
    .el-menu{
        display: flex;
        justify-content: flex-end;

    }
    .logo-box{
        height: 60px;
    }
    .logo-box .logo-img{
        height: 100%;
        text-align: left;
    }
    .forkme{
        position: absolute;
        right: 5px;
        top: 0;

        width: 149px;
        height: 149px;
    }

</style>