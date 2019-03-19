<template>
   <div class="header">
       <div class="controllSolider">
            <span class="svg-container">
                  <svg data-v-4e6f274c="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="hamburger"><path data-v-4e6f274c="" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg>
            </span>
       </div>
      <breadcrumb></breadcrumb>
      <div class="user-info">
        <userinfo></userinfo>
      </div>
      <div class="scroll-bar">
        <div class="child-item">首页</div>
        <div class="child-item active">说明</div>
        <div class="child-item">地址</div>
      </div>
   </div>
</template>
<script>
    import breadcrumb from "@/components/yinhui/breadcrumb/Breadcrumb.vue"
    import userinfo from "@/views/index/components/userinfo.vue"
    export default {
        name:"headinfo",
        components:{
                breadcrumb,
                userinfo
        }
    }
</script>
<style  scoped lang="scss">
    @import "../../../public/comm.scss";
    .scroll-bar{
        height: 30px;
        border-top:1px solid #d8dce5; 
         border-bottom:1px solid #d8dce5; 
    
        .child-item{
            font-size: 12px;
            border: 1px solid #d8dce5;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            display: inline-block;
            margin-top: 2px;
            box-sizing: content-box;
            height: 24px;
            line-height: 24px;
        }
        .child-item.active{
            background-color: #42b983;
            color: #fff;
            border-color: #42b983;
        }
        .child-item:first-child{
            margin-left: 15px;
        }
    }
    .controllSolider{
        display: inline-block;
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        vertical-align: middle;
        padding: 15px;
        font-size: 0;
        &:hover{
                background: rgba(0, 0, 0, 0.025);
        }
            .svg-container{
                display: inline-block;
                vertical-align: middle;
                width: 20px;
                height: 20px;
            }
    }
    .user-info{
          float:right;
          height: 50px;
          line-height: 50px;
          margin-right: 15px;
    }
    .header{
        @include u_code_maxbox();
        h1{
            height:$HEADER_HEIGHT+px;
            line-height: $HEADER_HEIGHT+px;
            width: $LEFT_CONTAINER_WIDTH + px;
            text-align: center;
        }
    }

</style>
