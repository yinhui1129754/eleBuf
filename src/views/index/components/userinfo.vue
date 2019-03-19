
    <template>
    <div>
           <el-dropdown trigger="click">
            <span class="el-dropdown-link">
               欢迎: {{username}}
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
    </div>
</template>
<script>
    export default {
        name:"userinfo",
        data (){
          return {
              username:"admin"
          };
        },
            methods: {
      
          }
    }
</script>
<style lang="scss">
    @import "@/../public/comm.scss";
   .el-dropdown-link{
       cursor: pointer;
   }
</style>
