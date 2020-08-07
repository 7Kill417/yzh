import shucheng from "@/views/shucheng/shucheng.vue";
import jingxuan from "../../components/shucheng/jingxuan.vue";
import men from "../../components/shucheng/men.vue";
import wumen from "../../components/shucheng/wumen.vue";
import chuban from "../../components/shucheng/chuban.vue";


export default{
    path:'/shucheng',
    component:shucheng,
    children:[
        {
            path:'jingxuan',
            component:jingxuan
        },
        {
            path:'men',
            component:men
        },
        {
            path:'wumen',
            component:wumen
        },
        {
            path:'chuban',
            component:chuban
        },
        {
            path:'/shucheng',
            redirect:'/shucheng/jingxuan'
        }
    ]
    
}