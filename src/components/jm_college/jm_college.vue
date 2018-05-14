<template>
  <div class="ticket w white overflow">
    <div class="advertising-top" v-if="isShowTopAdvertising">
      <a :href="fullUrl">
        <img :src="fullImg |smallImage(1240, 120)" alt="">
      </a>
    </div>
    <div class="news-content">
      <div class="clear out-box overflow">
        <!--全部-->
        <div class="news-details-content lf">
          <div class="news-details-content-inside">
          <div class="logo-img-box">
            <h3>什么是MMA综合格斗？</h3>
            <p>MMA就是mixed martial arts ，也就是我们常说的综合格斗，MMA比赛的规则对所有的武技一视同仁，允许选手使用拳击、柔术、泰拳、散打、摔跤、空手道、截拳道等多种格斗技巧，而比赛也往往可以看到打击、擒拿、地面缠斗、锁技等多种打斗场面。所以MMA比赛玩的是综合实力！
            </p>
            <h3 class="margin-top">怎样看懂MMA综合格斗的比赛？</h3>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;选手装备</h3>
            <p>护齿：保护运动员牙齿，在受到撞击后可以帮助减去大部分的震力。</p>
            <p>拳套：MMA比赛选用分指拳套，手掌部分以及手指部分外露，重量在4-6盎司之间。</p>
            <p> 短裤：必须穿戴综合搏击短裤，紧身短裤或者武术短裤。女性选手需要穿运动内衣或防磨服。</p>
            <p>护裆：保护男性选手下体。</p>
            <p> 脚部：MMA比赛选手不允许穿鞋。</p>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;比赛场地</h3>
            <div id="img-box">
              <img src="../../assets/images/@1xBitmap.jpg" alt="">
            </div>
            <p>擂台直径通常在7-10米之间，围栏高度1.8米，并且有两个可供出入的门。比赛中只有两名选手和一名裁判允许进入笼内，两回合之间个会打开两个门供双方选手团体入场。</p>
            <p>附：也有使用其他围绳擂台进行的搏击比赛。</p>
            <h3 class="margin-top">MMA比赛的胜负判定</h3>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;KO（Knock Out）</h3>
            <p>选手把对手用合理技术击倒并且使其暂时失去意识，裁判员终止比赛并判这名选手获胜。</p>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;TKO（Technical Knock Out）</h3>
            <p>一方选手在对手连续进攻时失去抵抗能力，并且场上裁判员判定如果比赛继续进行占劣势选手将会有被击昏的危险，裁判员终止比赛并判选手获胜。
            </p>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;降服</h3>
            <p>选手用语言表示认输或弃权，或者选手用肢体（手或脚）连续拍击垫子或对手身体三次以上表示认输或弃权，裁判员终止比赛并判这名选手的对手获胜。
            </p>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;判定取胜</h3>
            <p>在比赛回合打满，现场裁判根据选手每回个的表现给选手打分，得分多者获胜。其中打分标准有：有效打击、比赛中的控制性、侵略性等。</p>
            <p> 附：比赛还有其他判定方式，如：医生终止、选手弃权等。</p>
            <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;部分禁止动作</h3>
            <p> 1、用头撞人、插眼、撕咬、揪头发、扯拽对手的短裤及拳套；</p>
            <p> 2、攻击裆部、肘尖下刺、击打后脑、抓挠喉部、折拧对方的小关节；；</p>
            <p> 3、拉拽笼网、在比赛区域使用辱骂性的语言；</p>
            <p> 4、比赛时一方三点着地，另一方膝击或踢击对手头部。</p>
            <p> 附：还有众多其他禁止动作，在此就不一一列举了。</p>
            <h3 class="margin-top">精武门综合格斗职业联赛是什么？</h3>
            <!--<img class="icon" src="../../assets/images/@1xalitiyu.png" alt="">-->
            <img class="icon" src="../../assets/images/@1xjkm.png" alt="">
            <p>
              中国顶级MMA综合格斗职业联赛——精武门综合格斗职业联赛，
              是由健康猫主办，由国内专业的综合格斗(MMA)赛事运营商——广州市大象体育产业有限公司运营的独立原创品牌(IP)综合格斗赛事。本赛事以高规格、高水平、高影响力为办赛标准，建立国内首个职业搏击类联赛奖金池，致力于打造中国综合格斗职业联赛顶尖平台。
            </p>
            <h3 class="margin-top">精武门综合格斗职业联赛的亮点有哪些？</h3>
            <p class="bold">1、职业化——国内首家综合格斗职业联赛</p>
            <p >精武门是目前国内首家也是唯一的综合格斗职业联赛，区别于其他赛事的是联赛按俱乐部团体参赛，分俱乐部团体赛和金腰带挑战赛。俱乐部团体赛结束后，运动员进行各级别的金腰带挑战赛竞逐金腰带。</p>
            <p class="bold"> 2、专业化——接轨国际标准</p>
            <p>精武门只专注综合格斗，采用MMA国际通用竞赛规则，引入世界最优秀的综合格斗训练体系、运动员体系规则、赛事体系规则，并与国内16家顶尖俱乐部签约合作，致力打造三高国际化赛事品牌。</p>
            <p class="bold"> 3、千万级奖金池制度</p>
            <p>赛事设立中国首个千万级搏击类赛事奖金池，奖励对象为俱乐部团体、运动员个人、教练员、裁判员，其中俱乐部和运动员分别占47%、38%，而且比赛当场的冠亚军双方按比赛结果比分来分配奖金，保证比赛公平公正，将大大提高比赛的竞技性和观赏性。</p>
          </div>
          <div>
            <h3 class="margin-top">联赛采用何种竞赛规则？</h3>
            <p>采用精武门综合格斗职业联赛赛事运营商制定的比赛规则。</p>
          </div>
            <div class="p-content">
              <h3 class="margin-top">联赛的赛制是怎样？</h3>
              <h3 class="black">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;精武门综合格斗职业联赛（2016-2017赛季）赛制</h3>
              <p>赛事以俱乐部为参赛单位，分为团体赛与个人赛，实行俱乐部和个人选手双积分制，并建立国内首个千万级搏击类奖金池。</p>
              <p>1、俱乐部团体赛</p>
              <p>小组赛：采用单循环制。16家俱乐部按地理区域分成A、B、C、D四个小组进行小组循环赛，决出四个小组的第1名，晋级半决赛。 每场比赛3回合，每回合5分钟，每回合间休息1分钟。</p>
              <p>半决赛：采用单败淘汰制。4家俱乐部两两对决，胜者晋级总决赛。每场比赛3回合，每回合5分钟，每回合间休息1分钟。</p>
              <p>总决赛：2家俱乐部争夺冠亚军，胜者为本赛季团体冠军俱乐部。每场比赛3回合，每回合5分钟，每回合间休息1分钟。</p>
              <p> 2、运动员个人争霸赛</p>
              <p>在团体赛结束后，每个级别选出8名运动员进行个人争霸赛，决出本赛季各级别的冠军，冠军运动员授予‘精武英雄’荣誉称号。个人争霸赛采取单败淘汰制，每场比赛3回合，每回合5分钟，每回合间休息1分钟。</p>
              <h3 class="black margin-top20">&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;精武门格斗赛新赛季（2017-2018赛季）赛制</h3>
              <p class="bold">1、联赛赛制</p>
              <p>本赛季包括俱乐部团体赛和金腰带挑战赛。</p>

              <p class="bold margin-top20">2、俱乐部团体赛赛制</p>
              <p>16家俱乐部抽签，分成A、B、C、D四个小组进行小组单循环（共三轮）。</p>
              <p>小组赛抽签：根据各俱乐部的综合实力及报名情况，把16家俱乐部分为4个档次的小组，由四个档次的小组通过抽签的形式决定分组，一共分为：A、B、C、D四个小组。由第1档的四家俱乐部开始抽签，以抽到的字母决定组别。接下来2档、3档、4档，以此类推进行抽签，抽到哪个字母则为字母组。最终每四个档次抽到同一个字母的分为一组。产生最终的A、B、C、D四个小组。</p>
              <p>小组赛采用单循环，每个小组决出前两名晋级八强赛。每个小组末位失去下赛季参赛资格。</p>
              <p><b>八强赛</b>： 通过抽签配对，每小组第一名与其他三个小组的第二名通过抽签的形式决定对阵，例如：各小组赛第一名分别为：A1、B1、C1、D1，第二名分别为：A2、B2、C2、D2，由小组赛第一名A1抽取其它三个小组的第二名的进行对阵，依次循环直至最后一组配对完成，两两对决，采用单败淘汰制，胜出的4家俱乐部，胜者晋级半决赛。</p>
              <p><b>半决赛</b>：八强赛胜出的4家俱乐部，通过抽签配对，两两对决，采用单败淘汰制，胜者晋级总决赛。</p>
              <p><b>总决赛</b>：半决赛胜出的2家俱乐部进行决赛，胜者为本赛季团体冠军俱乐部。</p>
              <p>团体赛所有阶段的比赛，每场比赛均为3回合，每回合5分钟，每回合间休息1分钟。</p>
              <p>2.1 俱乐部的胜负判定</p>
              <p>两家俱乐部五个级别的运动员分别对阵，即五场比赛。胜负判定办法为：赢得场次多者胜，即五场三胜（即使已经获胜，仍需打满五场）。</p>
              <p>2.2 俱乐部排名办法</p>
              <p> 2.2.1 获胜轮次多者排名靠前；</p>
              <p> 2.2.2 若获胜轮次相同，则根据二者的胜负关系，胜者靠前；</p>
              <p>   2.2.3 若获胜轮次相同、胜负关系循环交叉，则获胜场次多者靠前；</p>
              <p> 2.2.4 若获胜场次仍然相同，则三轮累计KO、TKO、降服总次数多者靠前；若三轮累计KO、TKO、降服总次数相同，则三轮比赛中终结（KO、TKO、降服）总用时最少者靠前。</p>
              <p class="bold  margin-top20"> 3、金腰带挑战赛规则</p>
              <p> 3.1 每个级别设一条金腰带。从各个级别中，分别挑选出若干名实力相当的运动员进行两两对决，所有运动员进行单败淘汰赛决出资格赛的冠军，资格赛冠军将获得挑战金腰带的资格。若挑战成功，则该名运动员成为该级别金腰带新得主；若挑战失败，则该级别金腰带由原金腰带得主持有。</p>
              <p>3.2 资格赛每场比赛3回合，每回合5分钟，每回合间休息1分钟。金腰带挑战赛每场比赛5回合，每回合5分钟，每回合间休息1分钟。</p>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div class="details-right rt">
          <all-kings-of-combat></all-kings-of-combat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RelatedInformation from '../side_board/related_information.vue'
  import AllKingsOfCombat from './all_kinds_of_combat.vue'
  import {mapGetters} from 'vuex'
  import {title} from 'src/base/title.js'
  export default{
    title: title + '精武门百科',
    data () {
      return {
        // 广告api
        url: 'javascript:;',
        img: '',
        fullUrl: 'javascript:;',
        fullImg: '',
        isShowTopAdvertising: true,
        isShowAdvertising: true
      }
    },
    components: {
      AllKingsOfCombat,
      RelatedInformation
    },
    computed: mapGetters(['information_arr']),
    mounted () {
      this.information_arr.hotNews = [
        {
          icon: require('../../assets/images/@1xRectangle 10.png'),
          name: '泰击',
          title: '李景亮专访：相信胜利属于我！最喜欢罗比劳勒...',
          runkImg: {
            backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
          },
          rank: 1
        },
        {
          icon: require('../../assets/images/@1xRectangle 10.png'),
          name: '空手道',
          title: '李景亮专访：相信胜利属于我！最喜欢罗比劳勒...',
          runkImg: {
            backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
          },
          rank: 1
        },
        {
          icon: require('../../assets/images/@1xRectangle 10.png'),
          name: '雅桑克莱进军诸神16强',
          title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
          runkImg: {
            backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
          },
          rank: 1
        },
        {
          icon: require('../../assets/images/@1xRectangle 10.png'),
          name: '雅桑克莱进军诸神16强',
          title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
          runkImg: {
            backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
          },
          rank: 1
        },
        {
          icon: require('../../assets/images/@1xRectangle 10.png'),
          name: '雅桑克莱进军诸神16强',
          title: '俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍..俱乐部介绍俱乐部介绍俱乐部介绍部介绍部介绍部介绍.....',
          runkImg: {
            backgroundImage: 'url(' + require('../../assets/images/@1xRectangle 10.png') + ')'
          },
          rank: 1
        }
      ]
      // 广告横栏api 横栏传参数为奇数
      this.$http.getAdsense(12).then(res => {
        if (res.data) {
//        alert(1)
          if (res.data[0]) {
//          alert(2)
            if (res.data[0].infoAdsenseImages[0]) {
//            alert(3)
              this.fullUrl = res.data[0].infoAdsenseImages[0].url
              this.fullImg = res.data[0].infoAdsenseImages[0].imageUrl
            } else {
              this.isShowTopAdvertising = false
              console.error('res.data[0].infoAdsenseImages[0]无数据')
            }
          } else {
            this.isShowTopAdvertising = false
            console.error('res.data[0]无数据')
          }
        } else {
          this.isShowTopAdvertising = false
          console.error('res.data无数据')
        }
      })
    }
  }

</script>

<style lang="scss" scoped="">
  .ticket{
  }
  .details-right{
    width: 380px;
  }
  .news-content{
    padding: 0 10px;
    text-align: left;
    .news-details-content{
      width: 820px;
      .news-details-content-inside{
        padding: 0 20px;
        div{
          margin-bottom: 30px;
        }
        .logo-img-box{
          .icon{
            float: right;
          }
          #img-box{
            height: 272px;
            width: 780px;
            text-align:center;
          }
          p:nth-of-type(2){
            margin-top:11px;
          }
        }
      }
       p{
        text-align: left;
         font-size: 16px;
         color: #353536;
         letter-spacing: -0.48px;
         line-height: 30px;
      }
      .news-details-content-time{
        margin: 15px 0;
      }

      a{
        margin-top: 20px;
        font-size: 14px;
        color: #B5323A;
        letter-spacing: -0.38px;
      }
    }
    h3{
      font-size: 20px;
      color: #D90200;
      letter-spacing: -0.6px;
      line-height: 30px;
    }
    .margin-top{
      margin-top: 30px;
    }
    .margin-top20{
      margin-top: 20px;
    }
    .bold{
      font-weight: bold;
    }
    .black{
      color: #1a1a1a;
    }
    h4{
      font-size: 16px;
      color: #171718;
      letter-spacing: -0.48px;
      line-height: 30px;
    }
    p{
      text-align: center;
    }
  }
  .out-box{
    margin: 17px 0 17px 0;
  }
  h1{
    text-align: left;
  }
.p-content h4{
  margin-top: 20px;
}

</style>
