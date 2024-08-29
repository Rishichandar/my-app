import Layout from "../../Layout/Layout";
import Aboutbluediv from "../../All components/topcont";
import Aboutposbytz from "../../All components/Aboutposbytz";
import Reach from "../../All components/Reach";
import { useState,useEffect } from "react";
const About = () => {
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
               
                <Aboutbluediv title="About Us" breadcrumbs={['Home', 'About Us']} />
                <Aboutposbytz/>
                <Reach gridData={data.about.contact} />

            </Layout>

        </>
    )
}
export default About;