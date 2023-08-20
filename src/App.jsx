import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Knowmore from './components/Knowmore';
import MadeInIndia from './components/MadeInIndia';
import WhoAreWe from './components/WhoAreWe';
const App = () =>{
    return(
        <div>
            <HeroSection/>
            <Knowmore/>
            <MadeInIndia/>
            <WhoAreWe/>
        </div>
    )
}
export default App;