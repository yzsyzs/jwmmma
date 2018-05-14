/**
 * Created by Administrator on 2017/8/10.
 */
export const format = (string) => {
  return string || ''
}
export const MathFloor = (number) => {
  if (number || number === 0) {
    return Math.floor(number)
  } else {
    return number
  }
}
export const defaultUser = (Data,tag) => {
  if(!Data) return ''
  if(!Data[tag]) return '暂无'
  return Data[tag]
}
