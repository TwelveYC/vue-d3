<template>
  <div id="app">
      <el-container>
          <el-header>
              <main-tab-bar>
              </main-tab-bar>

          </el-header>
          <keep-alive>
              <el-main>
                  <router-view></router-view>
              </el-main>
          </keep-alive>
      </el-container>
  </div>
</template>
<script>
    import Home from "@/views/Home";
    import MainTabBar from "@/components/MainTabBar";
    export default {
        components:{
            Home,
            MainTabBar
        },
        created() {

        }
    }

</script>

<style>
@import "./assets/css/normalize.css";
    .el-header {
        /*background-color: #B3C0D1;*/
        color: #333;
        line-height: 60px;
        border-bottom: 1px solid #e6e6e6;
    }
    .el-main {
        color: #333;
        text-align: center;
    }
    .el-container{
        height: 100%;
        width: 100%;
    }

</style>
