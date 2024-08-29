import Layout from "../../Layout/Layout";
import Careertopcont from "../../All components/Careertopcont";
import Wherewework from "../../All components/Wherewework";
import Corevalues from "../../All components/Corevalues";
import Worklife from "../../All components/Worklife";
import Openposition from "../../All components/Openposition";
import Careerprinciple from "../../All components/Careerprinciple";
import Careerlastcont from "../../All components/Careerlastcont";
import { useState,useEffect } from "react";


const Career=()=>{
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
    return(
        <>
        <Layout>
            <Careertopcont/>
            <Wherewework workdata={data.career.Wherewework} />
            <Corevalues icon={data.career.corevalueicon} />
            <Worklife activity={data.career.Activities} />
            <Openposition openPosition={data.career.Openposition} />
            <Careerprinciple/>
            <Careerlastcont/>
        </Layout>
        
        </>
    )
}

export default Career;