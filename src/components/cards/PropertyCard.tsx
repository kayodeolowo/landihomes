import { CiLocationOn } from 'react-icons/ci';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsTextarea } from 'react-icons/bs';
import Link from 'next/link';
import { PropertyCardProps } from '@/types/reserves';

interface DetailsSectionProps {
  reserve: PropertyCardProps;
}


const PropertyCard: React.FC<DetailsSectionProps> = ({ reserve }) => {
    
  return (
    <div className="h-[18rem] sm:w-[14rem] min-w-[15rem] max-w-[18rem] hover:cursor-pointer hover:shadow-2xl w-[95%] mx-auto sm:mx-0 shadow-md rounded-b-lg">
      <Link href={`/detailsreserve/${reserve.id}`} key={reserve.id}>
        <div>
          <img src="./images/house.png" alt="apartments" className="h-[9rem] w-full rounded-t-xl" />
          <div className="pt-4 px-2 bg-white rounded-b-xl">
            <p className="">$2,000 </p>
            <p> {reserve.country} </p>
            <div className="flex text-xs flex-row items-center">
              <CiLocationOn />
              <p className=""> Thornridge Shiloh, Hawaii 81223 </p>
            </div>
            <hr className="mt-4 text-red-400  bg-red-400 " />
            <div className="mt-4 flex justify-between items-center pb-4">
              <div className="flex space-x-1 flex-row items-center">
                <FaBed />
                <p className="text-xs"> 3 beds </p>
              </div>
              <div className="flex space-x-1 flex-row items-center">
                <FaBath />
                <p className="text-xs"> 3 beds </p>
              </div>
              <div className="flex space-x-1 flex-row items-center">
                <BsTextarea />
                <p className="text-xs"> 3 beds </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
