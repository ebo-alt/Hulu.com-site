import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router'

export default function Plans() {
    const router = useRouter();

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-[1350px] w-full overflow-x-hidden">
      <div onClick={()=>router.push("http://localhost:3001/")}  className="bg-white dark:bg-gray-500 w-full h-[60px] flex justify-start items-center">
        <img
          src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg"
          className="w-[60px] translate-x-8 dark:fill-white"
        ></img>
      </div>
      <div className="flex -translate-y-10 -translate-x-8 justify-end">
        <a className="font-bold text-white dark:fill-slate-800 text-sm antialiased">LOG IN</a>
      </div>
      <div className="w-screen h-screen">
        <div className="flex justify-center">
          <h1 className="dark:text-white text-5xl font-extrabold translate-y-4">
            Choose Your Plan
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="dark:text-white translate-y-8 text-lg font-normal  text-gray-500">
            Switch plans or cancel anytime.
          </p>
        </div>
        <div className="flex justify-center">
          <a className="dark:text-white translate-y-[90px] font-semibold tracking-widest text-sm translate-x-16 ">
            BUNDLE / SAVE
          </a>
          <div className="w-[150px] h-[4px] bg-black dark:bg-white translate-y-[120px] -translate-x-[70px] "></div>
        </div>
        <div className="w-screen justify-center flex">
        <div className="flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 align-center ">
          <div className="shadow-sm flex sm:mb-24 justify-center translate-y-48 w-[340px] h-[480px] bg-white">
            <a className="font-extrabold text-xl absolute translate-y-[50px]">
              Disney Bundle Duo Basic
            </a>
            <img
              src="https://signup.hulu.com/static/images/2p-bundle.svg"
              className="w-[150px] -translate-y-28"
            ></img>

            <a className="translate-y-[170px] -translate-x-[35px] absolute text-4xl tracking-tight font-bold">
              $9.99
            </a>
            <a className="translate-y-[180px]  translate-x-[46px] absolute text-lg font-semibold">
              / month
            </a>
            <p className="translate-y-[235px] text-gray-500 text-sm tracking-wide absolute flex">
              Access endless entertainment with <br></br> Disney+ (With Ads),
              and award-winning <br></br> Hulu Originals with Hulu (With Ads)
            </p>
            <button className="text-slate-800 h-[48px] w-[280px] fixed text-base font-bold rounded-md translate-y-[365px] border-2 border-slate-800 tracking-widest">
              SELECT
            </button>
            <p className="text-blue-500 translate-y-[435px] cursor-pointer text-base tracking-tight fixed">
              Learn More
            </p>
            <p className="text-blue-500 translate-y-[495px] cursor-pointer text-sm tracking-tight fixed">
              Terms Apply
            </p>
          </div>
          <div className="shadow-md  z-50 translate-y-[160px] justify-center flex  border-t-4 border-green-600 w-[340px] h-[550px] bg-white">
            <div className="flex  ">
              <a className="font-extrabold text-xl absolute translate-y-[65px]">
                Disney Bundle Trio Basic
              </a>
              <img
                src="https://signup.hulu.com/static/images/superbundle-logo-color.svg"
                className="absolute w-56 translate-x-2 translate-y-[115px]"
              ></img>
            </div>
            <button className="w-[240px] h-[30px] translate-y-6 rounded-full bg-green-600 text-xs text-white tracking-widest font-extrabold items-center">
              SAVE 44% ($11.98/MO. OFF)*
            </button>

            <p className="translate-y-[250px] text-gray-500 text-sm tracking-wide absolute">
              Access live sports with ESPN+ (With Ads),<br></br> endless
              entertainment with Disney+ (With <br></br> Ads), and award-winning
              Hulu Originals <br></br> with Hulu (With Ads). *Savings compared{" "}
              <br></br> to regular monthly price of each service.
            </p>
            <button className="text-white h-[48px] w-[280px] fixed text-base font-bold rounded-md translate-y-[400px] bg-slate-800 tracking-widest">
              SELECT
            </button>
            <p className="text-blue-500 translate-y-[473px] cursor-pointer text-base tracking-tight fixed">
              Learn More
            </p>
            <p className="text-blue-500 translate-y-[558px] cursor-pointer text-sm tracking-tight fixed">
              Terms Apply
            </p>
            <a className="translate-y-[183px] -translate-x-[37px] absolute text-4xl tracking-tight font-bold">
              $14.99
            </a>
            <a className="translate-y-[193px]  translate-x-[55px] absolute text-lg font-semibold">
              {" "}
              / month
            </a>
          </div>
          <div className="shadow-sm translate-y-48 w-[335px] flex justify-center  h-[480px] bg-white">
            <img
              src="https://signup.hulu.com/static/images/superbundle-logo-color.svg"
              className="absolute w-56 translate-x translate-y-[96px]"
            ></img>
            <a className="font-extrabold text-xl absolute translate-y-[50px]">
              Disney Bundle Trio Premium
            </a>
            <a className="translate-y-[170px] -translate-x-[35px] absolute text-4xl tracking-tight font-bold">
              $24.99
            </a>
            <a className="translate-y-[180px]  translate-x-[58px] absolute text-lg font-semibold">
              {" "}
              / month
            </a>
            <p className="translate-y-[235px] flex text-gray-500 text-sm tracking-wide absolute flex">
              Access live sports with ESPN+ (With <br></br> Ads), endless
              entertainment with <br></br> Disney+ (No Ads), and award-winning{" "}
              <br></br> Hulu Originals with Hulu (No Ads).
            </p>
            <button className="text-slate-800 h-[48px] w-[280px] fixed text-base font-bold rounded-md translate-y-[365px] border-2 border-slate-800 tracking-widest">
              SELECT
            </button>
            <p className="text-blue-500 translate-y-[435px] cursor-pointer text-base tracking-tight fixed">
              Learn More
            </p>
            <p className="text-slate-800 dark:text-white translate-y-[495px] cursor-pointer text-sm tracking-tight fixed">
              A few excluded shows play with ads.
            </p>
            <img
              src="https://signup.hulu.com/static/images/info-icon.svg"
              className=" dark:bg-white translate-y-[497px] translate-x-[118px] fixed"
            ></img>
            <p className="text-blue-500 translate-y-[520px] cursor-pointer text-sm tracking-tight fixed">
              Terms Apply
            </p>
          </div>
        </div>
        </div>
        <div className="justify-center flex">
          <div className="translate-y-[260px] w-[637px] flex items-center h-[165px] bg-white rounded-lg border-4 border-slate-800 z-50">
            <img
              src="https://signup.hulu.com/static/images/superbundle-logo-color.svg"
              className="absolute w-[150px] translate-x-[33px] "
            ></img>
            <p className="-translate-y-[35px] translate-x-[218px] text-slate-800 font-bold text-base">
              Hulu (No Ads) + Live TV
            </p>
            <p className=" text-gray-500 translate-x-[218px] text-sm tracking-wide absolute flex">
              Get Hulu (No Ads) + Live TV for <br></br> $89.99/month
            </p>
            <p className="text-blue-500  translate-x-[218px] translate-y-[40px] cursor-pointer text-md tracking-tight fixed">
              More Details
            </p>
            <button className="text-slate-800 h-[48px] w-[110px] fixed text-base font-bold rounded-md translate-x-[480px] -translate-y-2 border-2 border-slate-800 tracking-widest">
              SELECT
            </button>
            <p className="text-blue-500 translate-x-[493px] translate-y-[40px] cursor-pointer text-base tracking-tight fixed">
              Learn More
            </p>
          </div>
          <div className="translate-y-[265px] translate-x-[5px] w-[637px] h-[165px] bg-green-400 rounded-lg absolute z-0"></div>
        </div>
        <div>
        <p className=" text-sm translate-y-[385px] tracking-wide cursor-pointer translate-x-[450px] text-gray-500 dark:text-white">About Ads</p>
        <img src="https://c.evidon.com/pub/icon1.png" className=" translate-y-[364px] translate-x-[430px]"></img>
        <p className=" text-sm translate-y-[347px] tracking-wide cursor-pointer translate-x-[545px] text-gray-500 dark:text-white">Subscriber Agreement</p>
        <p className=" text-sm translate-y-[326px] tracking-wide cursor-pointer translate-x-[725px] text-gray-500 dark:text-white">Privacy Policy</p>
        <p className=" text-sm translate-y-[306px] tracking-wide cursor-pointer translate-x-[850px] text-gray-500 dark:text-white">Do Not Sell or Share My Personal Information</p>
        <p className=" text-sm translate-y-[285px] tracking-wide cursor-pointer translate-x-[1180px] text-gray-500 dark:text-white">Your US State Privacy Rights</p>
        <p className=" text-sm translate-y-[265px] tracking-wide cursor-pointer translate-x-[1400px] text-gray-500 dark:text-white">© 2023 Hulu, LLC</p>
        </div>
      
      </div>
        
    </main>
  );
}