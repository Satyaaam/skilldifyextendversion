import white_black from '../assets/white_black.png'
const Analysis = () => {
    return(
        <div>
            <div className={"max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:py-10 sm:py-8 py-6 "}>
                <div>
                    <img src={white_black} alt={"Circular Image"}/>
                </div>
                <div className={"sm:text-[1.15rem] md:text-[1.15rem] text-[1rem] italic sm:px-3 px-3 mt-[20px] sm:mt-[0px]"}>
                        <li>The SWOT analysis of potential participants is the main focus. A demo segment is held to outline the advantages of the customized training program that will be provided.</li>
                        <li>Training and development mapping is the method we use to pinpoint the precise training needs and outcomes we anticipate will benefit learners the most.</li>
                        <li>Our approach to creating unique training content to fully meet the training requirement is known as "Trainer Customization."</li>
                        <li>To instill the participants' enthusiasm and a good attitude, a fun pre-training test is held.</li>
                        <li>Exclusive training consists of a series of engaging sessions with discussions, specific skill development, and participation boosters.</li>
                        <li>The purpose of the post-training test is to chart the trainee's success trajectory for impending problems rather than to evaluate the trainee.</li>
                </div>
            </div>
        </div>
    )
}

export default Analysis