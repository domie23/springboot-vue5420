import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fajin from '@/views/modules/fajin/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import pandian from '@/views/modules/pandian/list'
    import shuji from '@/views/modules/shuji/list'
    import shujiChuruInout from '@/views/modules/shujiChuruInout/list'
    import shujiChuruInoutList from '@/views/modules/shujiChuruInoutList/list'
    import shujiCollection from '@/views/modules/shujiCollection/list'
    import shujiCommentback from '@/views/modules/shujiCommentback/list'
    import shujiYuyue from '@/views/modules/shujiYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShuji from '@/views/modules/dictionaryShuji/list'
    import dictionaryShujiChuruInout from '@/views/modules/dictionaryShujiChuruInout/list'
    import dictionaryShujiCollection from '@/views/modules/dictionaryShujiCollection/list'
    import dictionaryShujiYuyue from '@/views/modules/dictionaryShujiYuyue/list'
    import dictionaryShujia from '@/views/modules/dictionaryShujia/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShuji',
        name: '书籍类型',
        component: dictionaryShuji
    }
    ,{
        path: '/dictionaryShujiChuruInout',
        name: '出入库类型',
        component: dictionaryShujiChuruInout
    }
    ,{
        path: '/dictionaryShujiCollection',
        name: '收藏表类型',
        component: dictionaryShujiCollection
    }
    ,{
        path: '/dictionaryShujiYuyue',
        name: '订单类型',
        component: dictionaryShujiYuyue
    }
    ,{
        path: '/dictionaryShujia',
        name: '所在书架',
        component: dictionaryShujia
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fajin',
        name: '罚金信息',
        component: fajin
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/pandian',
        name: '每日盘点',
        component: pandian
      }
    ,{
        path: '/shuji',
        name: '书籍',
        component: shuji
      }
    ,{
        path: '/shujiChuruInout',
        name: '出入库',
        component: shujiChuruInout
      }
    ,{
        path: '/shujiChuruInoutList',
        name: '出入库详情',
        component: shujiChuruInoutList
      }
    ,{
        path: '/shujiCollection',
        name: '书籍收藏',
        component: shujiCollection
      }
    ,{
        path: '/shujiCommentback',
        name: '书籍评价',
        component: shujiCommentback
      }
    ,{
        path: '/shujiYuyue',
        name: '书籍借阅',
        component: shujiYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
