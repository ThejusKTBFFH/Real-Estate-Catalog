import React from 'react'
import SideBar from '../SideBar/sidebar'
import Property from './Property'
import SearchAdd from './SearchAdd/SearchAdd'
import "./Home.css"

export default function Home(){
    return(
        <>
        
        <div className='home'>
      
      <section className='one'>
       <SideBar/>
      </section>
      
      <section className='two'>
       <Property/>
      <SearchAdd />

      </section>
        <div>
        </div>
    </div>
        </>

         
      
    )
}