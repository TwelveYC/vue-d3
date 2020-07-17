<template>
    <div>
        <svg :width="width" :height="height" id="mainsvg"></svg>
        <div>

        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    export default {
        name: "RectComponent",
        props: {
            width: {
                type: Number,
                default: 600
            },
            height: {
                type: Number,
                default: 800
            }
        },
        data() {
            return {
                svg: null,
                g: null,
                margin: {left: 20, right: 20, top:20, bottom: 20},
                inner_width: 0,
                inner_height: 0
            }
        },
        mounted() {
            this.svg = d3.select("#mainsvg");
            this.inner_width = this.width - this.margin.left - this.margin.right;
            this.inner_height = this.height - this.margin.top - this.margin.bottom;
            this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
        }
    }
</script>

<style scoped>
</style>