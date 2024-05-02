import MenuDashboard from "./MenuDashboard";
import { useState, useEffect } from "react";
import BarChart from "./BarChart.jsx";

function DashboardHomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to update isMobile when window is resized
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-quaternary w-screen h-screen overflow-y-scroll">
      {isMobile && (
        <>
          <div className="bg-quaternary text-base text-white font-montserrat">
            <div className="transparent">
              <div className="absolute top-[0px] left-[0px] bg-beige w-screen h-screen overflow-y-scroll">
                <img
                  className="absolute left-[0px]"
                  alt=""
                  src={"src/assets/dashboard/vector-414.svg"}
                />
                <img
                  className="absolute left-[0px]"
                  src={"src/assets/dashboard/vector-412.svg"}
                />
                <div className="absolute mt-12 ml-5 font-medium text-left">
                  <p className="m-0">Hello,</p>
                  <p className="m-0">
                    Si Gembrot<br></br>
                  </p>
                  <p className="text-[27.3px]">
                    <b>Centra Unit 1</b>
                  </p>
                </div>
                <img
                  className="absolute top-[46px] left-[365px] rounded-[50%] w-11 h-11 object-cover"
                  alt=""
                  src={"src/assets/dashboard/ellipse-8@2x.png"}
                />
                <img
                  className="absolute top-[225px] left-[0px] w-[430px] h-[703px]"
                  alt=""
                  src={"src/assets/dashboard/rectangle-3.svg"}
                />
                <div className="absolute top-[325px] left-[0px)] w-[369px] h-[45px] text-xs text-black">
                  <div className="absolute top-[0px] ml-6 rounded-full bg-white w-[369px] h-[45px]">
                  <ul className="flex">
  <li className="flex-1 mr-2">
    <a className="text-center block border border-tertiary rounded-full py-2 px-2 bg-tertiary hover:bg-secondary text-white" href="#">Active Item</a>
  </li>
  <li className="flex-1 mr-2">
    <a className="text-center block border border-white rounded-full hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-2" href="#">Nav Item</a>
  </li>
  <li className="text-center flex-1">
    <a className="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Item</a>
  </li>
</ul>
                  </div>
                  <div className="absolute top-[5px] left-[5px] rounded-xl bg-darkseagreen w-[88px] h-[35px]" />
                  <div className="absolute top-[15px] left-[13px] font-medium text-white inline-block w-[74.2px] h-[15.6px]">
                    Wet Leaves
                  </div>
                  <div className="absolute top-[14px] left-[119px] font-medium inline-block w-[72.3px] h-[25.7px]">
                    Dry Leaves
                  </div>
                  <div className="absolute top-[13px] left-[229px] font-medium inline-block w-[35.6px] h-[25.7px]">
                    Flour
                  </div>
                  <div className="absolute top-[14px] left-[299px] font-medium inline-block w-[57px] h-[11px]">
                    Shipping
                  </div>
                </div>
                <div className="absolute top-[273.1px] left-[48px] text-mini font-extralight text-seagreen-300 text-center inline-block w-[54px] h-[15px]">
                  Search
                </div>
                <div className="absolute top-[395px] ml-6 rounded-2xl bg-white w-[370px] h-[265px]">
                  <form className="absolute top-2 right-1 h-10 w-30">
                    <select
                      id="times"
                      className="bg-quaternary border border-primary text-primary text-sm focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary
                      rounded-full py-2 px-"
                    >
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Mothly</option>
                      <option>Annually</option>
                    </select>
                  </form>

                  <div className="mt-12">
                    <BarChart width="150%"></BarChart>
                  </div>
                </div>
                <b className="absolute top-[797px] left-[145px] text-[30px] inline-block w-[142px] h-[33px]">
                  Collector
                </b>
                <img
                  className="absolute top-[257px] left-[31px] rounded-6xl w-[305px] h-[45px]"
                  alt=""
                  src={"src/assets/dashboard/rectangle-39.svg"}
                />
                <img
                  className="absolute top-[255px] left-[290px] w-[50.7px] h-[48.4px]"
                  alt=""
                  src={"src/assets/dashboard/group-52.svg"}
                />
                <div className="absolute top-[270.7px] left-[47px] text-mini text-seagreen-300 text-center inline-block w-[55px] h-[17px]">
                  Search
                </div>
                <div className="absolute top-[673px] left-[31px] w-[370px] h-[108px] text-center text-black">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[370px] h-[108px]" />
                  <div className="absolute top-[74px] left-[299px] font-semibold inline-block w-[54px] h-[23px]">
                    102 Kg
                  </div>
                  <div className="absolute top-[42px] left-[303px] font-semibold inline-block w-[50px] h-[26px]">
                    {" "}
                    32 Kg
                  </div>
                  <div className="absolute top-[10px] left-[296px] font-semibold inline-block w-[57px] h-[17px]">
                    {" "}
                    371 Kg
                  </div>
                  <div className="absolute top-[13px] left-[17px] text-sm font-medium text-left">
                    Total Wet Leaves Collected:
                  </div>
                  <div className="absolute top-[45px] left-[17px] text-sm font-medium text-left">
                    Average Wet Leaves Collected Each Day:
                  </div>
                  <div className="absolute top-[77px] left-[17px] text-sm font-medium text-left">
                    Total Wet Leaves Disposed:
                  </div>
                </div>
                <img
                  className="absolute top-[254px] left-[352px] rounded-[60px] w-12 h-12 overflow-hidden"
                  alt=""
                  src={"src/assets/dashboard/frame.svg"}
                />
                <img
                  className="absolute top-[53px] left-[250px] w-[91px] h-[179px] object-cover hidden"
                  alt=""
                  src={"src/assets/dashboard/gembrot-4@2x.png"}
                />
                <img
                  className="absolute top-[53px] left-[250px] w-[91px] h-[179px] object-cover"
                  alt=""
                  src={"src/assets/dashboard/gembrot-4@2x.png"}
                />
                <div className="absolute top-[20px] right-[37.3px] w-[371.7px] h-[19.1px] text-center text-lg">
                  <div className="absolute top-[3px] right-[0px] w-[25.8px] h-3">
                    <div className="absolute top-[0px] right-[2.4px] rounded-[2.67px] box-border w-[23.4px] h-3 opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gainsboro" />
                    <img
                      className="absolute top-[3.9px] right-[0px] w-[1.4px] h-[4.2px] opacity-[0.4] mix-blend-normal"
                      alt=""
                      src={"src/assets/dashboard/cap.svg"}
                    />
                    <div className="absolute top-[2.1px] right-[4.6px] rounded-[1.33px] bg-white w-[19.1px] h-[7.8px]" />
                  </div>
                  <img
                    className="absolute top-[2.1px] right-[27.6px] rounded-[1.33px] w-[20px] h-[11.6px]"
                    alt=""
                    src={"src/assets/dashboard/wifi.svg"}
                  />
                  <img
                    className="absolute top-[2.1px] right-[27.6px] rounded-[1.33px] w-[70px] h-[11.6px]"
                    alt=""
                    src={"src/assets/dashboard/cellular-connection.svg"}
                  />
                  <div className="absolute w-[calc(100%_-_308px)] top-[calc(50%_-_9.55px)] left-[0px] tracking-[-0.28px] leading-[18px] font-medium inline-block h-[19.1px]">
                    9:41
                  </div>
                </div>

                <div className="absolute top-[852px] left-[65px] w-[300px] h-[223px] text-black">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-2xl w-[300px] h-[223px]"
                    alt=""
                    src={"src/assets/dashboard/rectangle-231.svg"}
                  />
                  <img
                    className="absolute top-[175px] left-[99px] rounded-6xl w-[103px] h-[38px]"
                    alt=""
                    src={"src/assets/dashboard/rectangle-221.svg"}
                  />
                  <div className="absolute top-[183px] left-[116px] font-semibold font-jost text-white text-center inline-block w-[69px] h-[18px]">
                    COLLECT
                  </div>
                  <div className="absolute top-[47px] left-[23px] font-medium inline-block w-[68px] h-4">{`Weight: `}</div>
                  <div className="absolute top-[111px] left-[24px] font-medium inline-block w-[68px] h-4">{`Date: `}</div>
                  <div className="absolute top-[73px] left-[23px] rounded-lg bg-mintcream w-[251px] h-7" />
                  <div className="absolute top-[137px] left-[23px] rounded-lg bg-mintcream w-[251px] h-7" />
                  <b className="absolute top-[10px] left-[calc(50%_-_118px)] text-lg inline-block w-[236px] h-[17px]">
                    Wet Leaves from Plasma
                  </b>
                </div>
                <img
                  className="absolute top-[1075px] left-[-5px]"
                  alt=""
                  src={"src/assets/dashboard/vector-382.svg"}
                />

                <div className="absolute top-[1095px] left-[65px] rounded-2xl bg-white w-[300px] h-[225px] flex flex-row items-center justify-center gap-[2px] text-seagreen-300">
                  <img
                    className="w-[20.1px] relative h-[20.1px] overflow-hidden shrink-0"
                    alt=""
                    src={"src/assets/dashboard/frame1.svg"}
                  />
                  <div className="relative font-semibold">Add on</div>
                </div>
              </div>
            </div>
          </div>

          <MenuDashboard></MenuDashboard>
        </>
      )}
    </div>
  );
}

export default DashboardHomePage;
