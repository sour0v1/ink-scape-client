import React, { useContext } from 'react';
import Banner from './Banner';
import CraftItems from './CraftItems';
import { AuthContext } from '../provider/AuthProvider';
import Faq from './Faq';
import Featured from './Featured';

const Home = () => {
    const {theme} = useContext(AuthContext);
    console.log(theme)
    return (
        <div className={`${!theme && 'bg-gray-950'}`}>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <Faq></Faq>
            <Featured></Featured>
        </div>
    );
};

export default Home;