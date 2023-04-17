import React from 'react'
import Navbar from './Navbar'
import Slidewindow from './Slidewindow';
import { ProSidebarProvider } from 'react-pro-sidebar';
import WelcomeBack from './WelcomeBack';
import HomeChart from './Chart/HomeChart';
import HomeChatexpo from './Chartexpo/HomeChatexpo';
import ListHome from './ListComponet/ListHome';
import TrafficeHome from './TraficePage/TrafficeHome';

const Home = () => {
  return (
    <div>
        <ProSidebarProvider>
     <Navbar/>
     <div className='flex'> <Slidewindow/>
      <div> 
    <div className='py-12'><WelcomeBack/></div>      
        <HomeChart/>
        <HomeChatexpo/>
        <ListHome/>
        <TrafficeHome/>
       </div> 
      </div>
     </ProSidebarProvider>
    </div>
  )
}

export default Home
