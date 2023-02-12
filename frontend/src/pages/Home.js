import React from 'react';
import { Class_img } from '../components/class';
import Drugs from '../components/Drugs';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Class_img />
            <Drugs title="Maux de tête" n1="Dolipranne 1000mg" n2="Dolipranne 1000mg"
            n3="Dolipranne 1000mg" n4="Dolipranne 1000mg" n5="Dolipranne 1000mg" s1="./doliprane.png"
            s2="./doliprane.png" s3="./doliprane.png" s4="./doliprane.png" s5="./doliprane.png" />
            <Drugs title="Maux de gorge" n1="Dolipranne 1000mg" n2="Dolipranne 1000mg"
            n3="Dolipranne 1000mg" n4="Dolipranne 1000mg" n5="Dolipranne 1000mg" s1="./doliprane.png"
            s2="./doliprane.png" s3="./doliprane.png" s4="./doliprane.png" s5="./doliprane.png" />
            <Drugs title="Maux de ventre" n1="Dolipranne 1000mg" n2="Dolipranne 1000mg"
            n3="Dolipranne 1000mg" n4="Dolipranne 1000mg" n5="Dolipranne 1000mg" s1="./doliprane.png"
            s2="./doliprane.png" s3="./doliprane.png" s4="./doliprane.png" s5="./doliprane.png" />
            <Drugs title="Douleurs articulaires" n1="Dolipranne 1000mg" n2="Dolipranne 1000mg"
            n3="Dolipranne 1000mg" n4="Dolipranne 1000mg" n5="Dolipranne 1000mg" s1="./doliprane.png"
            s2="./doliprane.png" s3="./doliprane.png" s4="./doliprane.png" s5="./doliprane.png" />
            <Footer />
        </div>
    );
};

export default Home;