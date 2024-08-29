import Layout from "../../Layout/Layout";
import Helpsupport from "../../All components/Helpsupport";
import Kindhelp from "../../All components/Kindhelp";
import Emailsupport from "../../All components/Emailsupport";
import Aboutbluediv from "../../All components/topcont";
import { useState,useEffect } from "react";
const Support = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/combineddata.json') // Fetch combined data
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>; // You can customize this loading state
    }
    return (
        <>
            <Layout>
                
                <Aboutbluediv
                    title="Contact Support"
                    breadcrumbs={['Home', 'Contact Us', 'Contact Support']}
                />
                <Helpsupport helpGridData={data.support.Helpdata} />
                <Kindhelp helpKindData={data.support.Kindofhelp} />
                <Emailsupport />


            </Layout>

        </>
    )
}

export default Support;