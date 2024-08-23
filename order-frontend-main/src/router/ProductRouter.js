
import ProductList from "@/views/ProductList.vue";
import ProductManage from "@/views/ProductListManage.vue";
import ProductCreate from "@/views/ProductCreate.vue";

export const ProductRouter = [
    {
        path: '/',
        name: 'Home',
        component: ProductList
    },
    {
        path: '/product/manage',
        name: 'ProductManage',
        component: ProductManage
    },
    {
        path: '/product/list',
        name: 'ProductList',
        component: ProductList
    },
    {
    path: '/product/create',
    name: 'ProductCreate',
    component: ProductCreate
    }
]
