<template>
  <div class="index">
   
     <div class="leftCon">
        <leftCon></leftCon>
      </div>
    <div class="content">
      <div class="header">
        <headinfo></headinfo>
    </div>
      <div class="rightCon">
            <router-view/>
      </div>

    </div>
   
  </div>
</template>

<script>
import headinfo from "@/components/yinhui/header.vue"
import leftCon from "@/components/yinhui/leftCon.vue"
export default {
  name: 'index',
  components: {
    headinfo:headinfo,
    leftCon
  }
}
</script>
<style scoped lang="scss">
    @import "@/../public/comm.scss";
    .index{
        @include u_code_maxbox();
        .header{
          width: 100%;
          height: $HEADER_HEIGHT+px;
        }
        .leftCon{
            position: absolute;
            left: 0;
            top: 0;
            width: $LEFT_CONTAINER_WIDTH+px;
            height: 100%;
          }
        .content{
          width: auto;
          position: absolute;
          left: $LEFT_CONTAINER_WIDTH+px;
          top: 0;
          bottom: 0;
          height: auto;
          font-size: 0;
          right: 0;
          
          .rightCon{
        //    position: absolute;
            left: 0px;
            top: $HEADER_HEIGHT+px;
            bottom: 0px;
            width: auto;
          //  height: 100%;
            right: 0px;
          }
        }
    }

</style>