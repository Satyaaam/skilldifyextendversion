import Ov1 from '../assets/ourvalue1.jpg'
import Ov2 from '../assets/ourvalue2.jpg'
import Ov3 from '../assets/ourvalue3.jpg'
const OurApproch = () => {
    return(
        <div className={"bg-[#F2382C]"}>
            <div className={"flex flex-col max-w-[1280px] sm:pb-[30px] md:pb-[50px] pb-[20px]"}>
                <h1 className={"text-3xl sm:text-3xl font-bold text-white md:text-5xl text-center mt-5  lg:text-6xl"}>Our Approch</h1>
                <p className={"sm:text-2xl text-xl font-semibold text-white text-center md:my-6 sm:my-5 my-3"}>It's A Whole Process To Be Better</p>
                <div className={"grid sm:grid-cols-3 sm:gap-[20px] gap-5 md:gap-[30px] lg:gap-[40px] grid-cols-1 sm:px-[20px] md:px-[25px] px-[7px]"}>

                    <div className={"p-[7px] bg-white rounded-sm"}>
                        <img src={Ov1} alt={"Logo One"} className={"rounded-lg"}/>
                        <p className={"sm:text-2xl text-xl text-black text-center font-semibold"}>SWOT Analysis</p>
                    </div>

                    <div className={"p-[7px] bg-white rounded-sm"}>
                        <img src={Ov2} alt={"Logo One"} className={"rounded-lg"}/>
                        <p className={"sm:text-2xl text-xl text-black text-center font-semibold"}>Needs Mapping</p>
                    </div>

                    <div className={"p-[7px] bg-white rounded-sm"}>
                        <img src={Ov3} alt={"Logo One"} className={"rounded-lg"}/>
                        <p className={"sm:text-2xl text-xl text-black text-center font-semibold"}>Trainer Customization</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default OurApproch;