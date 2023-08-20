import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Knowmore from './components/Knowmore';
import MadeInIndia from './components/MadeInIndia';
const App = () =>{
    return(
        <div>
            <HeroSection/>
            <Knowmore/>
            <MadeInIndia/>
        </div>
    )
}
export default App;