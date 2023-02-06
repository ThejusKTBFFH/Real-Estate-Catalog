import React from 'react'
import './sidebar.css'
import Proplogo from './Proplogo.svg'
import bell_logo from './bell_logo.svg'
import PVlogo from './PVlogo.svg'
import RIlogo from './RI_logo.svg'
import SIlogo from './SI_logo.svg'
import TPlogo from './TPlogo.svg'
export default function SideBar(){
    return(
        <div className='sidebar'>
            <div className='list'>
            <section className='logo'>
                <h1>Logo</h1>
            </section>
                <section>
                <img src={Proplogo} alt='property'/>
                    <h4>Property</h4>
                </section>
                <section>
                <img src={bell_logo} alt='assistance'/>
                    <h4>Assistance</h4>
                </section>
                <section>
                <img src={RIlogo} alt='receivedinterest'/>
                    <h4>Received Interest</h4>
                </section>
                <section>
                <img src={SIlogo} alt='sentinterest'/>
                    <h4>Sent Interest</h4>
                </section>
                <section>
                <img src={PVlogo} alt='propviews'/>
                    <h4>Property Views</h4>
                </section>
                <section>
                <img src={TPlogo} alt='tariffplan'/>
                    <h4>Tariff Plan</h4>
                </section>
            </div>
        </div>
    )
}