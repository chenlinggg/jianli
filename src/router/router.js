
import homePage from "@/views/homePage.vue";
import skillsPage from "@/views/skillsPage.vue";
import VueRouter from "vue-router";
import aboutPage from "@/views/aboutPage.vue";
import educationPpage from "@/views/educationPpage.vue";
import loginPage from "@/views/loginPage.vue";
import worksPage from "@/views/worksPage.vue";

const router=new VueRouter({
   routes:[
            {
                path:'/',
                redirect:'/homePage'
            },
        
            {
                path:'/homePage',
                component:homePage
            },{
                path:'/skillPage',
                component:skillsPage
            },
            {
                path:'/worksPage',
                component:worksPage
            },{
                path:'/aboutPage',
                component:aboutPage
            }
            ,
            {
                path:'/loginPage',
                component:loginPage
            },{
                path:'/educationPpage',
                component:educationPpage
            }
            
    
   ]



});
export default router;