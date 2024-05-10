import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import bumenxinxi from '@/views/modules/bumenxinxi/list'
    import forum from '@/views/modules/forum/list'
    import xueshengqingjia from '@/views/modules/xueshengqingjia/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import zhuanyexinxi from '@/views/modules/zhuanyexinxi/list'
    import jiaoxueneirong from '@/views/modules/jiaoxueneirong/list'
    import xueshengzuoye from '@/views/modules/xueshengzuoye/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import zuoyetijiao from '@/views/modules/zuoyetijiao/list'
    import xueshengqiandao from '@/views/modules/xueshengqiandao/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import config from '@/views/modules/config/list'


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
    }
          ,{
	path: '/bumenxinxi',
        name: '部门信息',
        component: bumenxinxi
      }
          ,{
	path: '/forum',
        name: '教师交流',
        component: forum
      }
          ,{
	path: '/xueshengqingjia',
        name: '学生请假',
        component: xueshengqingjia
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/zhuanyexinxi',
        name: '专业信息',
        component: zhuanyexinxi
      }
          ,{
	path: '/jiaoxueneirong',
        name: '教学内容',
        component: jiaoxueneirong
      }
          ,{
	path: '/xueshengzuoye',
        name: '学生作业',
        component: xueshengzuoye
      }
          ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
          ,{
	path: '/zuoyetijiao',
        name: '作业提交',
        component: zuoyetijiao
      }
          ,{
	path: '/xueshengqiandao',
        name: '学生签到',
        component: xueshengqiandao
      }
          ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
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
