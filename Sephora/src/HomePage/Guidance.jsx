// db3.json file
// import data from "../db3.js";
import {data} from "../db3.js"
const Guidance = ({ title, para }) => {
  return (
    <>
      <div className="mt-10 px-32">
        <div className="flex justify-between ">
          <div>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-sm">{para}</p>
          </div>

          <div className="flex gap-2">
            {data.map((ele) => (
              <div
                id="guid"
                key={ele.id}
                className=" rounded-md shadow-md border justify-evenly flex-col px-4 "
              >
                <p>{ele.task2.title}</p>
                <div className="w-[50px] mt-16">
                  <img className="border" src={ele.task2.images} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="border mt-10" />
      </div>
    </>
  );
};

export default Guidance;