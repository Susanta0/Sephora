
// Chakra UI
import { Input } from "@chakra-ui/react";
// React Css
import { IoIosSearch } from "react-icons/io";

// NOTE search
const Search = () => {
  return (
    <div className=" relative lg:flex items-center flex-1 mx-6">
      <Input
        borderRadius="-moz-initial"
        htmlSize={4}
        className="p-1.5 pl-20  rounded-full flex-1 bg-[#F6F6F8] outline-none border-slate-950"
        placeholder="Search"
      />
      <div className="absolute left-2">
        <IoIosSearch className="text-xl" />
      </div>
    </div>
  );
};
export default Search