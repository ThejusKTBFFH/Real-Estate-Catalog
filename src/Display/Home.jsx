import React from 'react'
import SideBar from '../SideBar/sidebar'
import Property from './Property'
import SearchAdd from './SearchAdd/SearchAdd'
import ListProp from './Listprop'
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
      <ListProp/>

      </section>
        <div>
        </div>
    </div>
        </>

         
      
    )
}