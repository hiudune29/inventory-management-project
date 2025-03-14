import React from 'react';
import Header from "../components/layout/Header";
import RevenueCard from "../components/dashboard/revenueCard";

const Dashboard = () => {
    return (
        <div className={'dashboard'}>
            <Header/>
            <span >Dashboard</span>
            <div className={'p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
                <div>
                    adad
                </div>
                <div>
                    adad
                </div>
                <div>
                    adad
                </div>
            </div>
        </div>
    );
}
export default Dashboard;