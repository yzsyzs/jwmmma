
export const normalTime = (time, index) => {
  if (typeof (time) === 'string') return time
  if (time) {
    var oDate = new Date()
    oDate.setTime(time)
    var y = oDate.getFullYear()
    var m = ((oDate.getMonth() + 1) <= 9) ? '0' + (oDate.getMonth() + 1) : oDate.getMonth() + 1
    var d = oDate.getDate() <= 9 ? '0' + oDate.getDate() : oDate.getDate()
    var h = oDate.getHours() <= 9 ? '0' + oDate.getHours() : oDate.getHours()
    var min = oDate.getMinutes() <= 9 ? '0' + oDate.getMinutes() : oDate.getMinutes()
    var s = oDate.getSeconds()
    if (index === 1) {
      return y + '年' + m + '月' + d + '日 ' + h + ':' + min + ':' + s
    } else if (index === 2) {
      return y + '年' + m + '月' + d + '日 '
    } else if (index === 3) {
      return y + '年' + m + '月'
    } else if (index === 4) {
      return y + '.' + m + '.' + d
    } else if (index === 5) {
      return y + '年' + m + '月' + d + '日 ' + h + ':' + min
    } else if (index === 6) {
        return y + '年'
    } else if (index === 7){
        return y + '-' + m + '-' + d
    } else {
      return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s
    }
  }
}
