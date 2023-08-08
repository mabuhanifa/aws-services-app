import { CiUser } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import platter from "../assets/platee.png";

export default function Nav() {
  return (
    <>
      <nav className="bg-white flex flex-col-reverse gap-y-5 shad rounded-lg py-3 px-5 lg:flex-row justify-between items-center my-10">
        <div className="lg:flex items-center justify-between hidden">
          <span className="font-bold">
            <MdFoodBank className="text-gray-500 inline text-2xl mb-1 mr-2" />
            Food Finder
          </span>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 rounded-md py-2 md:w-96 px-10"
              placeholder="Search"
            />
            <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-2" />
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <button className="flex items-center mt-1 relative">
            <img src={platter} alt="platter" className="h-[30px]" />
            <span className="absolute top-[-8px] right-[-10px] h-5 w-5 bg-red-500 rounded-full text-white text-sm">0</span>
          </button>
          <button className="flex items-center relative">
            <CiUser className="text-2xl text-gray-600 mt-1.5" />
          </button>
        </div>
      </nav>
      <div></div>
    </>
  );
}
