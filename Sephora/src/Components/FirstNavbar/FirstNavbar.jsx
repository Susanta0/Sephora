import { RxTriangleRight } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

//NOTE freetrail
const FreeTrial = () => {
  return (
    <div className="flex gap-1 items-center bg-[#E7B9B2] justify-center h-14 text-sm cursor-pointer">
      <h3 className="font-bold hover:underline">
        Choose up to 3 FREE trial sizes
        <span className="font-normal">
          {" "}
          with $30, $55, or $80* purchaes. *Terms apply. Code
        </span>{" "}
        BEAUTYFAVS
      </h3>
      <RxTriangleRight className="text-sm" />
    </div>
  );
};

// NOTE logo

const Logo = () => {
  return <p className="tracking-widest font-medium text-2xl">SEPHORA</p>;
};

// NOTE search
import { Input } from "@chakra-ui/react";
const Search = () => {
  return (
    <div className=" relative lg:flex items-center flex-1 mx-6">
      <Input
        htmlSize={4}
        className="p-1.5 pl-8 rounded-full flex-1 bg-[#F6F6F8] outline-none border border-slate-950"
        placeholder="Search"
      />
      <div className="absolute left-2 rounded-full">
        <IoIosSearch className="text-xl" />
      </div>
    </div>
  );
};

// NOTE store
import { Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { LiaStoreAltSolid } from "react-icons/lia";
const Store = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuButtonHover = () => {
    setMenuOpen(true);
  };

  const handleMenuButtonLeave = () => {
    setMenuOpen(false);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        className=" flex items-center hover:border-b border-slate-900"
        onMouseMove={handleMenuButtonHover}
        onMouseLeave={handleMenuButtonLeave}
      >
        <div className="flex gap-3 items-center">
          <LiaStoreAltSolid className=" text-3xl " />
          <div className="">
            <h3 className="font-medium">Stores & Services</h3>
            <p className="text-sm">Choose Your Store</p>
          </div>
        </div>
      </MenuButton>
      {isMenuOpen && (
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

// NOTE community
import { IoIosPeople } from "react-icons/io";
const Community = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          className=" flex hover:border-b border-slate-900 items-center "
        >
          <div className="flex gap-3 items-center">
            <IoIosPeople className=" text-3xl " />
            <div className="">
              <h3 className="font-medium">Community</h3>
            </div>
          </div>
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
// NOTE signin
import signlogo from "./ImagesFolder/sign-logo.svg";
const Signin = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          className=" flex hover:border-b border-slate-900 items-center "
        >
          <div className="flex gap-3 items-center">
            <Image w="30px" src={signlogo} />
            <div className=" ">
              <h3 className="font-medium text-start">Sign in</h3>
              <p className="text-sm">for FREE Shipping🚗</p>
            </div>
          </div>
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
// NOTE Loved
import { PiHeartStraightThin } from "react-icons/pi";
const Loved = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} className=" flex items-center bg-transparent">
          <PiHeartStraightThin className="text-3xl" />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
// NOTE basket
import { LiaShoppingBasketSolid } from "react-icons/lia";

const Basket = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} className=" flex items-center bg-transparent">
          <LiaShoppingBasketSolid className="text-3xl" />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
const FirstNavbar = () => {
  return (
    <>
      <FreeTrial />
      <div className="border border-slate-950 flex  gap-1 items-center h-24 px-36">
        <Logo />
        <Search />
        <div className="flex gap-6 items-center">
          <Store />
          <Community />
          <h2 className="text-2xl font-thin">|</h2>
          <Signin />
          <Loved />
          <Basket />
        </div>
      </div>
    </>
  );
};

export default FirstNavbar;
