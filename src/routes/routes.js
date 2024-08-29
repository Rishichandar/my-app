import Home from "../All Pages/Home/Home";
import About from "../All Pages/About/About";
import Contact from "../All Pages/Contact/Contact";
import Support from "../All Pages/Support/Support";
import Career from "../All Pages/Career.jsx/Career";
import AuthPage from "../All Pages/Auth/Auth";

const routes=[
    {
        path: '/',
        element: <Home />
    },
    {
        path:'/About-us',
        element:<About/>
    }
    ,
    {
        path:'/Contact-us',
        element:<Contact/>
    },
    {
        path:'/Support',
        element:<Support/>
    }
    ,{
        path:'/Login',
        element:<AuthPage/>
    }
    ,{
        path:'/Register',
        element:<AuthPage/>
    },
    {
        path:'/Career',
        element:<Career/>
    }
    //here we add multiple components and their corresponding path 
];

export default routes;