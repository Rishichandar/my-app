import Layout from "../../Layout/Layout";
import Contactcenterdiv from "../../All components/Contactcenterdiv";
import Aboutbluediv from "../../All components/topcont";

const Contact=()=>{
    return(
        <>
        <Layout>
            {/* <Contacttopcont/> */}
            <Aboutbluediv title="Contact Us" breadcrumbs={['Home', 'Contact Us']} />
            <Contactcenterdiv/>

        </Layout>
        
        </>
    )
}

export  default Contact;