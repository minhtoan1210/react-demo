import Home from './page/Home/Index.jsx';
import Team from './page/Team/Index.jsx';
import Course_detail from './page/Course-detail/Index.jsx';
import Email from './page/Email/Index.jsx';
import Fag from './page/Fag/Index.jsx';
import Gioi_thieu from './page/Gioi-thieu-coin/Index.jsx';
import Hop_tac from './page/Hop-tac/Index.jsx';
import Courses from './page/Course/Index.jsx';
import Thong_tin from './page/Thong_tin/Index.jsx';
import Project from './page/Project/Index.jsx';
import Dang_ki from './page/Dang_ki/Index.jsx';
import Thanh_toan from './page/Thanh_toan/Index.jsx';
import Page_404 from './page/404/Index.jsx';
import Main from './layout/Main.jsx';

const routers = [
    {
        path:'/email',
        component:Email
    },
    {
        path:'/',
        component:Main,
        routers: [
            {
                path: '/Team',
                component:Team,
            },
            {
                path: '/Course/:slug',
                component:Course_detail,
            },
            {
                path:'/Fag',
                component:Fag,
            },
            {
                path:'/Thanh_toan',
                component:Thanh_toan,
            },
            {
                path:'/Gioi_thieu',
                component:Gioi_thieu,
            },
            {
                path:'/Hop_tac',
                component:Hop_tac,
            },
            {
                path:'/Courses',
                component:Courses,
            },
            {
                path:'/Thong_tin',
                component:Thong_tin,
            },
            {
                path:'/Project',
                component:Project
            },
            {
                path:'/Dang_ki/:slug',
                component:Dang_ki
            },
            {
                path:'/',
                component:Home
            },
            {
                component:Page_404
            }
        ]
    }
]
export default routers