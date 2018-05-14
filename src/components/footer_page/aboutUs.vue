<template>
    <div class="about-us">
      <div class="w">
        <div class="top">
          <div class="title">参赛俱乐部</div>
          <div class="club-list">
            <!--<a :href="item.url" v-for="(item, index) in arr">-->
              <!--<p>{{item.title}}</p>-->
            <!--</a>-->
            <div  v-for="(item, index) in arr" @click="jumpToWidowsClubDetails(item.url)" :class="{havepoint:item.url}">
              <p>{{item.fullName}}</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <dl>
            <dt>关于我们</dt>
            <dd>主办方：广州大象健康科技有限公司</dd>
            <dd>地址：广州市思成路19号宏太智慧谷8号楼601室</dd>
            <dd>
              电话（前台）：‭(020) 3728 6192‬
            </dd>
            <dd>邮箱（竞赛合作）：‭ligj@healthmall.cn</dd>
        </dl>
          <div class="weixin">
            <img src="../../assets/images/@1xweixin_erweima.jpg" alt="">
            <p>精武门微信公众号</p>
          </div>
            <div class="weibo" @click="go">
              <img src="../../assets/images/@1xweiboma.jpg" alt="">
              <p>精武门官方微博</p>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        arr: {
            type:Array,
            default: function () {
                return [
                    {
                        fullName: '',
                        url: ''
                    }
                ]
            }
        }
    },
    data () {
        return {
            // arr: [
            //     {
            //         fullName: '河北顽石搏击俱乐部',
            //         url: ''
            //     }
            // ]
        }
    },
    methods: {
        go () {
            window.open('http://www.weibo.com/u/5904303661?topnav=1&wvr=6&topsug=1&is_hot=1')
        },
        jumpToWidowsClubDetails(url) {
          if(url) {
            window.open(url)
          } else {
            return false
          }
        }
    },
    mounted () {
        // this.$http.getTeamClubInfo(100).then(res => {
        //     // console.log('合作俱乐部', res.data)
        //     this.arr = res.data.data
        // })
    }
}


</script>

<style lang="scss" scoped>
  .top{
    box-sizing: border-box;
    padding-top: 36px;
    overflow: hidden;
  }
  .bottom{
    position: relative;
    padding-top: 36px;
    /*height: 120px;*/
    .weixin,
    .weibo{
      img{
        width: 100px;
        height: 100px;
      }
      p{
        margin-top: 8px;
        text-align: center;
        font-size: 14px;
        color: #838383;
        letter-spacing: 0;
        line-height: 14px;
      }
    }
    .weixin{
      position: absolute;
      left: 638px;
      top: 50px;
    }
    .weibo{
      cursor: pointer;
      position: absolute;
      left: 778px;
      top: 50px;
    }

    div{
      position: absolute;
      left: 520px;
      top: 55%;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 26px;
      p{
        text-align: left;
      }
    }
  }
  .about-us{
    /*height: 337px;*/
    background:url("../../assets/images/@1xjulebuditu.jpg") no-repeat 0 0 ;
    background-size:100% 100%;
    box-sizing: border-box;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: -0.54px;
    overflow: hidden;
    padding-bottom: 20px;
  }
  .title{
    font-size: 18px;
    text-align: left;
    width: 100%;
  }
  .club-list{
    margin-top: 10px;
    text-align: left;
    overflow: hidden;
    div{
      display: inline-block;
      height: 28px;
      width: 244px;
      line-height: 27px;
      text-decoration: none;
      text-align: left;
      cursor: auto;
      p{
        display: inline-block;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: -0.54px;
      }
    }
  }
  dl{
    float: left;
    dd,dt{
      text-align: left;
    }
    dd{
      line-height: 25px;
    }
    dt{
      font-size: 18px;
      margin-bottom: 22px;
    }
    &:nth-of-type(2){
      padding-top: 20px;
    }
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5){
      margin-top: 42px;
    }

  }
  dl+dl{
    margin-left: 60px;
  }
  .havepoint{
    p:hover{
      cursor: pointer;
      color: #D90200 ;
      border-bottom:1px solid #D90200 ;
      display: inline-block;
    }
  }
</style>
