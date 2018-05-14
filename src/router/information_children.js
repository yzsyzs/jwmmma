/**
 * Created by Administrator on 2017/7/30.
 */
// informationChildren
import ChildrenIndex from '../components/public/information_children/index.vue'
import ChildrenNewz from '../components/public/information_children/newz.vue'
import ChildrenPhoto from '../components/public/information_children/photo.vue'
import ChildrenVideo from '../components/public/information_children/video.vue'

export default [
  {
    path: '/',
    component: ChildrenIndex
  },
  {
    path: 'newz',
    component: ChildrenNewz
  },
  {
    path: 'photo',
    component: ChildrenPhoto
  },
  {
    path: 'video',
    component: ChildrenVideo
  }
]

