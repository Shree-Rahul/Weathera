const currentWeather = ({data}) => {
  if(!data) return (
    <div className="w-5/6 rounded-md shadow-md shadow-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white mx-auto my-5 mb-0 p-5 pt-0">
      <div className="flex justify-between text-slate-800 dark:text-white items-center">
        <div className="">
          <p className=" tracking-wide font-semibold text-lg m-0 leading-none">
            City
          </p>
          <p className="text-sm font-normal m-0 leading-none">
            Weather
          </p>
        </div>
        <img alt="weather" className="w-[100px]" src={`icons/unknown.png`}></img>
      </div>
      <div className="flex gap-5 justify-around items-center text-slate-800 dark:text-white">
        <p className="font-extrabold text-5xl my-2.5 ">__°C</p>
        <div className="w-3/6 pl-5">
          <div className="font-bold text-lg text-center border border-transparent border-b-indigo-300 mb-2">
            <span>Details</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span className="">Feels Like</span>
            <span className="font-semibold">__°C</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span>Winds</span>
            <span className="font-semibold">__ m/s</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span>Humidity</span>
            <span className="font-semibold">__%</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span>Pressure </span>
            <span className="font-semibold">__ hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-5/6 rounded-md shadow-md shadow-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white mx-auto my-5 mb-0 p-5 pt-0">
      <div className="flex justify-between text-slate-800 dark:text-white items-center">
        <div className="">
          <p className=" tracking-wide font-semibold text-lg m-0 leading-none">
            {data.city}
          </p>
          <p className="text-sm font-normal m-0 leading-none">
            {data.weather[0].description}
          </p>
        </div>
        <img alt="weather" className="w-[100px]" src={`icons/${data.weather[0].icon}.png`}></img>
      </div>
      <div className="flex gap-5 justify-around items-center text-slate-800 dark:text-white">
        <p className="font-extrabold text-5xl my-2.5 ">{Math.round(data.main.temp)}°C</p>
        <div className="w-3/6 pl-5">
          <div className="font-bold text-lg text-center border border-transparent border-b-indigo-300 mb-2">
            <span>Details</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span className="">Feels Like</span>
            <span className="font-semibold">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span>Winds</span>
            <span className="font-semibold">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span>Humidity</span>
            <span className="font-semibold">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between text-left text-sm">
            <span>Pressure </span>
            <span className="font-semibold">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentWeather;
