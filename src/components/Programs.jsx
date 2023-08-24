import pOv from '../assets/ourvalue3.jpg'
import two from '../assets/ourvalue2.jpg'
import three from '../assets/ourvalue1.jpg'
import four from '../assets/ourvalue4.png'
import five from '../assets/Untitled-design-77.png'
import six from '../assets/Untitled-design-79.png'
const Programs = () => {
    return(
        <div className={"bg-[#F2382C]"}>
            <div className={"max-w-[1280px] w-[100%] mx-auto md:py-8 sm:py-7 py-4"}>
                <h1 className={"md:text-6xl sm:text-5xl text-4xl font-bold text-white text-center"}>Programs</h1>
                <div className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 px-4 md:mt-[40px] sm:mt-[30px] mt-[15px]"}>

                    <div>
                        <img src={pOv} alt={"image1"} />
                        <h1 className={"text-black mt-[10px] bg-white font-semibold text-center text-[1rem] md:text-[1.2rem]"}>Language Training</h1>
                    </div>

                    <div>
                        <img src={two} alt={"image1"} />
                        <h1 className={"text-black mt-[10px] bg-white font-semibold text-center text-[1rem] md:text-[1.2rem]"}>PD Training</h1>
                    </div>

                    <div>
                        <img src={three} alt={"image1"} />
                        <h1 className={"text-black mt-[10px] bg-white font-semibold text-center text-[1rem] md:text-[1.2rem]"}>Corporate Training</h1>
                    </div>

                    <div>
                        <img src={four} alt={"image1"} />
                        <h1 className={"text-black mt-[10px] bg-white font-semibold text-center text-[1rem] md:text-[1.2rem]"}>Sales Training</h1>
                    </div>

                    <div>
                        <img src={five} alt={"image1"} />
                        <h1 className={"text-black mt-[10px] bg-white font-semibold text-center text-[1rem] md:text-[1.2rem]"}>HRM Training</h1>
                    </div>

                    <div>
                        <img src={six} alt={"image1"} />
                        <h1 className={"text-black mt-[10px] bg-white font-semibold text-center text-[1rem] md:text-[1.2rem]"}>Others Training</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Programs;