/**
 * Created by Administrator on 2017/8/16.
 */
export const reward = (index) => {
  let reward = ['冠军', '亚军', '季军']
  return reward[(parseInt(index) - 1)]
}
