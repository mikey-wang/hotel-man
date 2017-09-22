const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/template',
    meta: {
        title: 'template'
    },
    component: (resolve) => require(['./views/template.vue'], resolve)
},{
    path: '/cityExamine',
    meta: {
        title: '城市审核列表'
    },
    component: (resolve) => require(['./views/city/cityExamine.vue'], resolve)
}];
export default routers;