/**
 * Created by Administrator on 2017/8/9.
 */
/**
 * Created by Administrator on 2017/8/9.
 */
export const getLengthPonit = (str, start, end) => {
  // console.log(str)
  if (end) {
    if (!str || str.length <= end) {
      return str
    }
  } else if (!str) {
    return str
  }
  return str.substring(start, end) + '...'
}
export const getLengthPonitInside = (str, n) => {
  if (!str) return ''
  var r = /[^\x00-\xff]/g
  if (str.replace(r, 'mm').length <= n) { return str }
  var m = Math.floor(n / 2)
  for (var i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, 'mm').length >= n) {
      return str.substr(0, i) + '...'
    }
  }
  return str
}
