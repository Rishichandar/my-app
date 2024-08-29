import { useState, useEffect } from 'react';
import React from 'react';
import Toptitle from '../../All components/Toptitle';
import Feature from '../../All components/Feature';
import Videocontainer from '../../All components/Videocontainer';
import Gridcontainer from '../../All components/Gridcontainer';
import Logocontainer from '../../All components/Logocontainer';
import Trustedbrands from '../../All components/Trustedbrands';
import Layout from '../../Layout/Layout';
import Customertestimonials from '../../All components/Customertestimonials';
import Questions from '../../All components/Questions';

export default function Home() {
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
            <section>
                <Layout>
                <Toptitle />
                <Feature features={data.home.features} />
                <Videocontainer />
                <Gridcontainer data={data.home.data} />
                <Logocontainer />
                <Trustedbrands brand={data.home.brands} />
                <Customertestimonials reviews={data.home.customerReviews} />
                <Questions faq1={data.home.questions} />
                </Layout>
                
            </section>
        </>
    );
}

