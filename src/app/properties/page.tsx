import { Container } from "@/components/Styles/Container";
import { BsTextarea } from "react-icons/bs";
import { CiLocationOn } from 'react-icons/ci'
import {FaBath, FaBed} from 'react-icons/fa'

const Properties = () => {
  return <Container>

    <div className=" h-[90rem]">
      <div className="h-[18rem] md:w-[16rem]   ">
          <img src="./images/house.png" alt="apartments" className="h-[9rem] w-full rounded-t-xl" />
          <div className="pt-4 px-4 bg-white rounded-b-xl">
              <p className="">$23,000 </p>
              <p> Harmony Heights </p>
                <div className="flex flex-row items-center">
                  <CiLocationOn />
                  <p className="text-xs"> Thornridge Cir. Shiloh, Hawaii 81223 </p>


                </div>
                   <hr className="mt-4 text-red-400  bg-red-400 " />

                <div className="mt-4 flex justify-between items-center pb-4">
                    <div className="flex space-x-1 flex-row items-center">
                        <FaBed/>
                        <p className="text-xs"> 3 beds </p>
                    </div>

                    <div className="flex space-x-1 flex-row items-center">
                        <FaBath/>
                        <p className="text-xs"> 3 beds </p>
                    </div>

                    <div className="flex space-x-1 flex-row items-center">
                        <BsTextarea/>
                        <p className="text-xs"> 3 beds </p>
                    </div>

                </div>
          </div>
      </div>
    </div>
  </Container>;
};

export default Properties;
