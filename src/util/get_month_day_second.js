/**
 * Created by Administrator on 2017/8/7.
 */
export const monthDaySecond = (time) => {
  if (time) {
    var oDate = new Date()
    oDate.setTime(time)
    var m = ((oDate.getMonth() + 1) < 9) ? '0' + (oDate.getMonth() + 1) : oDate.getMonth() + 1
    var d = oDate.getDate() < 9 ? '0' + oDate.getDate() : oDate.getDate()
    var h = oDate.getHours() < 9 ? '0' + oDate.getHours() : oDate.getHours()
    var min = oDate.getMinutes() < 9 ? '0' + oDate.getMinutes() : oDate.getMinutes()
    return m + '月' + d + '日' + ' ' + h + ':' + min
  }
}
