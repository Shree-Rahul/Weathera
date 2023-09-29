import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );
    if(!data) return (
        <>
      <label className="text-xl my-2 text-slate-100 font-semibold absolute left-1/2 translate-x-[-50%]">Daily</label>
      <Accordion className="mt-10" allowZeroExpanded>
        {forecastDays.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading className="mt-2">
              <AccordionItemButton>
                <div className="bg-slate-600 shadow-sm shadow-black rounded-xl h-10 m-1 flex items-center cursor-pointer text-sm px-5 py-2">
                  <img
                    alt="weatheria"
                    src={`icons/unknown.png`}
                    className="h-full"
                  ></img>
                  <label className="flex-1 text-md font-semibold ml-5 text-slate-100">{forecastDays[idx]}</label>
                  <label className=" flex-1 text-slate-200 text-right mr-5 capitalize">Unknown</label>
                  <label className="text-slate-400">
                    __°C/{" "}
                    __°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="grid grid-cols-2 flex-1 gap-x-2.5 ml-[1.5%] w-[97%] rounded-xl px-5 py-2  bg-slate-500 text-slate-100">
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Pressure:</label>
                        <label>__hPa</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Humidity:</label>
                        <label>__%</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Clouds:</label>
                        <label>__%</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Wind Speed:</label>
                        <label>__m/s</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Sea level:</label>
                        <label>__m</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Feels like:</label>
                        <label>__°C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
    );
    
  return (
    <>
    <label className="text-xl my-2 text-slate-100 font-semibold absolute left-1/2 translate-x-[-50%]">Daily</label>
      <Accordion className="mt-10" allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading className="mt-2">
              <AccordionItemButton>
              <div className="bg-slate-600 shadow-sm shadow-black rounded-xl h-10 m-1 flex items-center cursor-pointer text-sm px-5 py-2">
                  <img
                    alt="weatheria"
                    src={`icons/${item.weather[0].icon}.png`}
                    className="h-full"
                  ></img>
                  <label className="flex-1 text-md font-semibold ml-5 text-slate-100">{forecastDays[idx]}</label>
                  <label className=" flex-1 text-slate-200 text-right mr-5 capitalize">{item.weather[0].description}</label>
                  <label className="text-slate-400">
                    {Math.round(item.main.temp_min)} °C/{" "}
                    {Math.round(item.main.temp_max)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="grid grid-cols-2 flex-1 gap-x-2.5 ml-[1.5%] w-[97%] rounded-xl px-5 py-2  bg-slate-500 text-slate-100">
            <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Pressure:</label>
                        <label>{item.main.pressure}hPa</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Humidity:</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Clouds:</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Wind Speed:</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Sea level:</label>
                        <label>{item.main.sea_level} m</label>
                    </div>
                    <div className="flex h-7 justify-between items-center">
                        <label className="text-slate-900">Feels like:</label>
                        <label>{Math.round(item.main.feels_like)} °C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
