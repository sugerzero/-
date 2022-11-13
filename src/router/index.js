import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Layout/Login'
import login1 from '@/views/Layout/login1'
import login2 from '@/views/logins/login2'
import login3 from '@/views/logins/login3'
import login4 from '@/views/logins/login4'
import login5 from '@/views/logins/login5'
import login6 from '@/views/logins/login6'
import login7 from '@/views/logins/login7'
import login8 from '@/views/logins/login8'
import login9 from '@/views/logins/login9'
import wageitem1 from '@/views/Layout/wageitem/wageitem1'
import zhuce from '@/views/Layout/zhuce'
import logins from '@/views/Layout/logins'
import check_one from '@/views/Layout/check/check_one/check_one'
import check_two from '@/views/Layout/check/check_two/check_two'
import wages1 from '@/views/Layout/wages/wages1/wages1'
import wages2 from '@/views/Layout/wages/wages2/wages2'
import login10 from '@/views/logins/login10'
import login11 from '@/views/logins/login11'


const people = () =>
    import ('../views/Layout/Employee_information/people.vue')


Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Login',
    //     component: Login,
    // },
    {
        path: '/',
        redirect: '/Login',
        name: 'logins',
        component: logins,
        children: [{
                path: '/zhuce',
                name: 'zhuce',
                component: zhuce
            },
            {
                path: '/login10',
                name: 'login10',
                component: login10
            },
            {
                path: '/Login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/login11',
                name: 'login11',
                component: login11,
            }
        ]
    },

    {
        path: '/',
        name: 'login1',
        component: login1,
        children: [{
                path: '/login2',
                component: login2,
                name: 'login2',
            },
            {
                path: '/login3',
                component: login3,
                name: 'login3'
            },
            {
                path: '/login4',
                component: login4,
                name: 'login4'
            },
            {
                path: '/login5',
                component: login5,
                name: 'login5'
            },
            {
                path: '/login6',
                name: 'login6',
                component: login6,
                require: '/login6/people',
                children: [{
                    path: 'people',
                    component: people,
                    name: 'people'
                }]
            },
            {
                path: '/login7',
                name: 'login7',
                component: login7,
                require: '/login7/wageitem1',
                children: [{
                    path: 'wageitem1',
                    component: wageitem1,
                    name: 'wageitem1'
                }]
            },
            {
                path: '/login8',
                name: 'login8',
                component: login8,
                children: [{
                        path: '/login8/check_one',
                        component: check_one,
                        name: 'check_one'
                    },
                    {
                        path: '/login8/check_two',
                        component: check_two,
                        name: 'check_two'
                    },
                ]
            },
            {
                path: '/login9',
                name: 'login9',
                component: login9,
                children: [{
                        path: '/login9/wages1',
                        component: wages1,
                        name: 'wages1'
                    },
                    {
                        path: '/login9/wages2',
                        component: wages2,
                        name: 'wages2'
                    },
                ]
            },






        ]
    },

]
const router = new VueRouter({
    routes
})
export default router