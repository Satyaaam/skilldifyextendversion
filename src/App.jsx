import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Knowmore from './components/Knowmore';
import MadeInIndia from './components/MadeInIndia';
import WhoAreWe from './components/WhoAreWe';
import HelpingSection from './components/HelpingSection';
import OurValues from './components/OurValues';
import Methodology from './components/Methodology';
const App = () =>{
    return(
        <div>
            <HeroSection/>
            <Knowmore/>
            <MadeInIndia/>
            <WhoAreWe/>
            <HelpingSection/>
            <OurValues/>
            <Methodology/>
        </div>
    )
}
export default App;