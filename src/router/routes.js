
const INDEX = resolve => require(['components/index'], resolve);
const LOGIN = resolve => require(['components/login'], resolve);

const routes = [
    { 
        path: '/', 
        name: 'index', 
        component: INDEX,
        children: [
            {
                path: '/login',
                name: 'login',
                component: LOGIN
            }
        ]
    },
]


export default routes;