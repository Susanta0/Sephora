import Navbar from "../Components/Navbar";
import Banner from "../Pages/Banner";
import Home from "../Pages/Home";
import { Beauty } from "../Pages/Beauty";
import { Poster } from "../Pages/Poster";
import { Selling } from "../Pages/Selling";
import { Rewards } from "../Pages/Rewards";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Home heading="Chosen For You" />
      <Home heading="New Arrivals" linkText="Show more" />
      <Beauty />
      <Poster />
      <Selling heading="Selling Fast"/>
      <Rewards/>
    </>
  );
};

export default AllRoutes;
