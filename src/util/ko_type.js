/**
 * Created by Administrator on 2017/8/18.
 */
/**
 * Created by Administrator on 2017/8/9.
 */
/**
 * Created by Administrator on 2017/8/4.
 */
export const koType = (type) => {
  let kotype = {
    '01': 'KO获胜',
    '02': 'TKO获胜',
    '03': '判断'
  }
  return kotype[type]
}
