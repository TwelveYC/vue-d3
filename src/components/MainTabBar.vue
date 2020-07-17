<template>
    <div class="menu-box">
        <div class="logo-box">
            <img src="@/assets/images/d3-logo.png" alt="d3" class="logo-img">
            <img src="@/assets/images/vue-logo.png" alt="vue" class="logo-img">
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Home</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Components</template>
                <el-menu-item v-for="(item, index) in chartTypes" :index="getPlusOne(2,index)" :key="index">
                    <a :href="item.href" class="el-menu-item">{{item.name}}</a>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">Example</template>
                <el-menu-item v-for="(item, index) in examples" :index="getPlusOne(2, index)" :key="index">
                    <a :href="item.href" target="_blank" class="el-menu-item">{{item.name}}</a>
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
                    href: "https://www.baidu.com/"
                },{
                    name: "Example2",
                    href: "https://www.baidu.com/",
                },{
                    name: "Example3",
                    href: "https://www.baidu.com/",
                }]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getPlusOne(tab,index) {
                return tab.toString() + "-"+(index+1).toString();
            }
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