<template>
    <div>
      <div class="seach">
        <div class="w">
          <div class="seach-left">
            <span>语言:</span>
            <select-component style="width: 100px;height: 20px"></select-component>
            <span>自媒体:</span>
            <!--<a href="#"><img src="../../assets/images/placeholder.png" alt=""></a>-->
            <!--<a href="#"><img src="../../assets/images/placeholder.png" alt=""></a>-->
            <!--<a href="#"><img src="../../assets/images/placeholder.png" alt=""></a>-->
            <!--<a href="#"><img src="../../assets/images/placeholder.png" alt=""></a>-->
          </div>
          <div class="seach-right rt">
            <el-input class="lf" v-model="seachInput" placeholder="请输入关键内容"></el-input>
            <el-button class="el-btn" type="primary" @click="search" >搜索</el-button>
          </div>
        </div>
        <div class="nav">
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </div>
      <div class="NavMenu">

      </div>
    </div>
</template>

<script>
import selectComponent from '../public/select.vue'

export default {
  data () {
    return {
      seachInput: ''
    }
  },
  components: {
    selectComponent
  },
  methods: {
    search () {
      this.$router.push({path: '/search'})
    }
  }
}
</script>

<style lang="scss" >
  .seach{
    background-color: #f2f2f2;
    height: 40px;
    line-height: 40px;

    .seach-left{
      float: left;
      img{
        height: 40px;
      }
    }
  }
  .seach-right{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 40px;
    input{
      float: left;
      width: 150px;
      border-radius: 30px;
      height: 20px;

    }
    .el-btn{
      height: 30px;
      float: right;
      line-height: 10px;
    }
  }
</style>
