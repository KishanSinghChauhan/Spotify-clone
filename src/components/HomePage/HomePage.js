import React from 'react'
import Footer from '../Footer/Footer';
import MainInfo from '../MainInfo/MainInfo';
import Sidebar from '../Sidebar/Sidebar';
import './HomePage.scss';
const HomePage = () => {
    return (
        <div>
            <div>
                <Sidebar />
                <MainInfo />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
