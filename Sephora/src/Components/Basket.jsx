// Chakra UI
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import { Button} from "@chakra-ui/react";
// logos
import rewards from "../assets/rewards.svg";
import card from "../assets/card.svg";
// Recat icons
import { PiVanThin } from "react-icons/pi";

// NOTE basket
import { LiaShoppingBasketSolid } from "react-icons/lia";

import { useState } from "react";
import Login from "../Pages/Login";
const Basket = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Menu isOpen={open} onClose={handleClose}>
        <MenuButton
          // as={Button}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onClick={() => setOpen(!open)}
          className=" flex items-center bg-transparent"
        >
          <LiaShoppingBasketSolid className="text-3xl" />
        </MenuButton>
        <MenuList
          className="border w-96 bg-[#F6F6F8] rounded-md"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          autoFocus={false}
        >
          <MenuItem bg="white" className="px-3 py-4 font-bold rounded-t-md">
            Basket
          </MenuItem>
          <MenuItem
            bg="white"
            className="py-6 border-t-2 rounded-b-lg px-3 font-bold text-sm bg-white flex-col w-full"
          >
            <div className="text-center mb-4">
              Sign in to see items you may have added previously.
            </div>
            <Login />
          </MenuItem>

          <MenuItem bg="white" className="px-3 py-4 gap-4 bg-white border-t-2">
            <img src={rewards} alt="rewards" />
            <p className="text-xs">
              See sample, rewards, and promos in{" "}
              <span className="text-blue-600 underline">basket</span>
            </p>
          </MenuItem>
          <MenuItem bg="white" className="px-3 py-4 gap-4 bg-white border-t-2">
            <PiVanThin className="text-2xl" />
            <p className="text-xs">
              Beauty Insiders enjoy <strong>FREE standard shipping</strong> on
              all orders.
            </p>
          </MenuItem>
          <MenuItem
            bg="white"
            className=" px-4 py-4 gap-4 bg-white border-t-2 flex-col rounded-b-md"
          >
            <div className="flex gap-4">
              <div>
                <img src={card} alt="card" />
              </div>
              <div className="text-xs">
                <h2 className="font-bold">The Sephora Credit Card Program</h2>
                <p>
                  Save 25% on this order when you open and use either Sephora
                  Credit Card today*
                </p>
              </div>
            </div>
            <div className="w-full pl-9">
              <button className=" hover:bg-zinc-50 border border-slate-950 text-xs font-bold px-4 py-2 rounded-full">
                SEE DETAILS
              </button>
              <p className="text-xs mt-2">
                *Subject to credit approval. Exclusions apply.
              </p>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
export default Basket;
