import Navbar from "../All components/navbar"
import Footer from "../All components/Footer"

export default function Layout({children}){
    return(
        <>
        <section>
            <Navbar/>
            {children}
            <Footer/>
            

        </section>
        </>
    )
}