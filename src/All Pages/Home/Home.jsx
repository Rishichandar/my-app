
import React from 'react';
import Toptitle from '../../All components/Toptitle';
import Feature from '../../All components/Feature';
import Videocontainer from '../../All components/Videocontainer';
import Gridcontainer from '../../All components/Gridcontainer';
import Logocontainer from '../../All components/Logocontainer';
import Trustedbrands from '../../All components/Trustedbrands';
import Layout from '../Layout/Layout';
import Customertestimonials from '../../All components/Customertestimonials';
import Questions from '../../All components/Questions';

export default function Home() {


    return (
        <>
            <section>
                <Layout>
                <Toptitle />
                <Feature />
                <Videocontainer />
                <Gridcontainer />
                <Logocontainer />
                <Trustedbrands />
                <Customertestimonials/>
                <Questions/>
                </Layout>
                
            </section>
        </>
    );
}

