/**
 * Created by Administrator on 2017/8/12.
 */
export const smallImage = (image, w, h) => {
  if (image) {
    if (h) {
      return image + '?imageView2/2/w/' + w + '/h/' + h
    } else {
      return image + '?imageView2/2/w/' + w
    }
  } else {
    return image
  }
}
