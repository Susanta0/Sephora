// NOTE Components
import Search from "./Search";
import Store from "./Stores&Services";
import Community from "./Community";
import Signin from "./SignIn";
import Loved from "./Loved";
import Basket from "./Basket";
import Logo, { FreeTrial } from "./FreeTrail&Logo";

// NOTE First nav bar
const FirstNavbar = () => {
  return (
    <>
      <FreeTrial/>
      <div className="flex items-center h-24 px-28">
        <Logo/>
        <Search/>
        <div className="flex gap-6 items-center">
          <Store/>
          <Community/>
          <h2 className="text-2xl font-thin">|</h2>
          <Signin/>
          <Loved/>
          <Basket/>
        </div>
      </div>
    </>
  );
};

export default FirstNavbar;
