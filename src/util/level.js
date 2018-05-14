/**
 * Created by Administrator on 2017/8/4.
 */
export const level = (index) => {
  let levelArr = {
    '00': '草量级',
    '01': '蝇量级',
    '02': '雏量级',
    '03': '羽量级',
    '04': '轻量级',
    '05': '次中量级'
  }
  return levelArr[index]
}

export const playLevel = (index) => {
    let levelArr = {
        '-1': '全部',
        '00': '草量级（52公斤）',
        '01': '蝇量级(57公斤)',
        '02': '雏量级（61.5公斤）',
        '03': '羽量级（66.5公斤）',
        '04': '轻量级（70.5公斤）',
        '05': '次中量级（77.5公斤）'

    }
    return levelArr[index]
}
