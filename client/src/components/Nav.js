import { CiUser } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

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
        <div>
          <button>
            <CiUser className="text-2xl text-gray-600 mt-1.5" />
          </button>
        </div>
      </nav>
      <div></div>
    </>
  );
}
