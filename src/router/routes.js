
const INDEX = resolve => require(['components/HelloWorld'], resolve);

const routes = [
    { 
        path: '/',
        name: 'index',
        component: INDEX
    }
]


export default routes;