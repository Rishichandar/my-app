import Home from "../All Pages/Home/Home";
import About from "../All Pages/About/About";
import Contact from "../All Pages/Contact/Contact";
import Support from "../All Pages/Support/Support";
import Login from "../All Pages/Login/Login";
import Register from "../All Pages/Register/Register";

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
        element:<Login/>
    }
    ,{
        path:'/Register',
        element:<Register/>
    }
    //here we add multiple components and their corresponding path 
];

export default routes;