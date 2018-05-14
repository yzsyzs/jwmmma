/**
 * Created by Administrator on 2017/8/4.
 */
export const monthDay = (time) => {
  if (time) {
    var oDate = new Date()
    oDate.setTime(time)
    var m = ((oDate.getMonth() + 1) <= 9) ? '0' + (oDate.getMonth() + 1) : oDate.getMonth() + 1
    var d = oDate.getDate() < 9 ? '0' + oDate.getDate() : oDate.getDate()
    return m + '-' + d
  }
}

export const monthDaySuffix = (time) => {
  if (time) {
    var oDate = new Date()
    oDate.setTime(time)
    var m = ((oDate.getMonth() + 1) <= 9) ? '0' + (oDate.getMonth() + 1) : oDate.getMonth() + 1
    var d = oDate.getDate() < 9 ? '0' + oDate.getDate() : oDate.getDate()
    return m + '月-' + d + '日'
  }
}
