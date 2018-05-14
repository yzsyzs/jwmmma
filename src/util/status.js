/**
 * Created by Administrator on 2017/9/14.
 */
export const status = (index) => {
  index = (index === null || index === undefined || index === '') ? '05' : index
  var statusObject = {
    '01': '未开始', '02': '进行中', '03': '已结束', '04': '已结束', '05': '已取消'
  }
  return statusObject[index]
}
