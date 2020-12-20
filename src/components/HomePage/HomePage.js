import React from "react";
import Footer from "../Footer/Footer";
import "./HomePage.scss";
import Sidebar from "../Sidebar/Sidebar";
import MainInfo from "../MainInfo/MainInfo";

const  HomePage = ({ spotify }) => {
  return (
    <div className="home">
      <div className="home_body">
        <Sidebar />
        <MainInfo spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default HomePage;