import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Knowmore from './components/Knowmore';
import MadeInIndia from './components/MadeInIndia';
import WhoAreWe from './components/WhoAreWe';
import HelpingSection from './components/HelpingSection';
import OurValues from './components/OurValues';
import Methodology from './components/Methodology';
import OurApproch from "./components/OurApproch.jsx";
import Analysis from "./components/Analysis.jsx";
import Why from "./components/Why.jsx";
import Programs from "./components/Programs.jsx";
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
            <OurApproch/>
            <Analysis/>
            <Why/>
            <Programs/>
        </div>
    )
}
export default App;