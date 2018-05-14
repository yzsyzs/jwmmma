/**
 * Created by Administrator on 2017/8/10.
 */
// 按出生日算
export const age = (time) => {
    if (time) {
    let oDate = new Date()
    let currentDate = new Date()
    oDate.setTime(time)
    // 对象年月日
    let y = oDate.getFullYear()
    let m = oDate.getMonth() + 1
    let d = oDate.getDate()
    // 当前年月日
    let cy = currentDate.getFullYear()
    let cm = currentDate.getMonth() + 1
    let cd = currentDate.getDate()
    let newAge = cy - y
    let oldAge = cy - y - 1
    // 如果月份大于当前月，大一岁
    if ( cm > m ){
        return newAge
        // 如果月份等于当前月判断时期
    } else if (cm === m){
      // 生日大于当前日，大一岁
        if( cd >= d){
          return newAge
        }else {
          return oldAge
        }
    }else {
      return oldAge
    }
  }
}
export const ageYear = (time) => {
    if (time) {
        let oDate = new Date()
        let currentDate = new Date()
        oDate.setTime(time)
        // 对象年月日
        let y = oDate.getFullYear()
        // 当前年月日
        let cy = currentDate.getFullYear()

        let newAge = cy - y
        let oldAge = cy - y - 1
        return newAge
    }
}
