import React from "react";
import '../Pages/CSS/Dashboard.css'
import Dashboard_container from "../components/Container/Dashboard-container";
import Header from "../components/Header/Header";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

function Dashboard() {
  return (

   
        <div className="dashboard-grid">
          <Header />
          <SidebarMenu />
          <Dashboard_container />
          </div>

  )};

  export default Dashboard;
  