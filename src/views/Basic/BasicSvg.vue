<template>
    <div>
        <el-tabs tab-position="left" style="height: 300px;" v-model="tabValue">
            <el-tab-pane label="rect">
                <rect-component></rect-component>
            </el-tab-pane>
            <el-tab-pane label="circle">

            </el-tab-pane>
            <el-tab-pane label="ellipse">

            </el-tab-pane>
            <el-tab-pane label="line">

            </el-tab-pane>
            <el-tab-pane label="polyline">

            </el-tab-pane>
            <el-tab-pane label="ploygon">

            </el-tab-pane>
            <el-tab-pane label="path">

            </el-tab-pane>
        </el-tabs>
        {{tabValue}}
    </div>
</template>

<script>
    import RectComponent from "./childrenComponents/RectComponent";
    export default {
        name: "BasicSvg",
        data() {
            return {
                elements: ["rect", "circle", "ellipse", "line", "polyline", "ploygon", "path"],
                tabValue: null
            }
        },
        components: {
            RectComponent
        }
    }
</script>

<style scoped>

</style>