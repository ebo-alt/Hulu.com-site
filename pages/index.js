export default function Home() {
  return (
    <div className="bg-white dark:bg-black h-full subpixel-antialiased">
      <div class="h-[700px] w-full flex justify-start items-center flex-col bg-[url('https://cnbl-cdn.bamgrid.com/assets/62ed936344e6ffbac48c896b2bd327fe171521dd941b6ddc8402e2eae50116fc/original')] bg-cover bg-no-repeat bg-center">
        <div className="w-full h-40 flex justify-between">
          <img
            class="h-5 mt-7 ml-10"
            src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg"
          />
          <button
            type="button"
            class=" h-10   mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            LOG IN
          </button>
        </div>
        <div className="flex">
          <div className="flex justify-start items-center flex-col">
            <h1 className="text-[#00ed82] font-semibold lg:text-sm md:text-xs sm:text-[10px] tracking-wider">
              DISNEY BUNDLE DUO BASIC
            </h1>
            <img className="w-2/5 mt-6" src="https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png" />
            <h1 className="lg:text-2xl font-semibold text-white mt-6 md:text-xl">
              Both with ads, for <br/>$9.99/month.
            </h1>
            <button
              type="button"
              class="lg:text-sm md:text-[10px] sm:text-[8px] text-center text-black mt-6 w-1/5 focus:outline-none bg-[#336e6b] hover:bg-green-200 focus:ring-4 focus:ring-green-300 font-bold rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              GET THEM BOTH
            </button>
          </div>
          <div className="flex justify-start items-center flex-col">
            <h1 className="text-[#00ed82] lg:text-sm md:text-xs sm:text-[10px] tracking-wider">
              DISNEY BUNDLE TRIO BASIC
            </h1>
            <img className="w-2/5 mt-6" src="https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png" />
            <h1 className="lg:text-2xl font-semibold text-white mt-6 md:text-xl">
              Both with ads, for <br/>$14.99/month.
            </h1>
            <button
              type="button"
              class="lg:text-sm md:text-[10px] sm:text-[8px] text-center text-black mt-6 w-1/5 focus:outline-none bg-[#336e6b] hover:bg-green-200 focus:ring-4 focus:ring-green-300 font-bold rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              GET ALL THREE
            </button>
          </div>
        </div>
        <h1 className="font-light underline underline-offset-1 text-[#A0A0A0] text-[11px] mt-3">Terms apply</h1>
        <h1 className="mt-8 text-white underline underline-offset-1 font-light">SIGN UP FOR HULU ONLY</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col mt-16">  
        <h1 className="text-[#00ed82] font-semibold text-sm tracking-wider">
          INCLUDED IN ALL PLANS
        </h1>
        <h1 className="text-black dark:text-white text-4xl font-semibold mt-8">All The TV You Love</h1>
        <h1 className="text-black dark:text-white mt-8 text-lg text-center">Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</h1>
       </div>
       <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-6  mt-10">
          <img className="h-[450px] w-auto rounded hover:border hover:border-8 border-[#44484E]" src="https://cnbl-cdn.bamgrid.com/assets/82fd53644e709344c9e9c1f4ba66519505ecea256294d59a0637bda76ae1436b/original"/>
          <img className="h-[450px] w-auto rounded hover:border hover:border-8 border-[#44484E]" src="https://cnbl-cdn.bamgrid.com/assets/8c630a19daa8615918152082839724f4dab6538939ba7d3bb45f8faa97acf1b9/original"/>
          <img className="h-[450px] w-auto rounded hover:border hover:border-8 border-[#44484E]" src="https://cnbl-cdn.bamgrid.com/assets/6293f29d56ae0519362951fa38cf62f61004662eb674e61d99e93e7f064d74ff/original"/>
          <img className="h-[450px] w-auto rounded hover:border hover:border-8 border-[#44484E]" src="https://cnbl-cdn.bamgrid.com/assets/f3f84cde435747f424ce4ad52d351efc96b5da4765af2f76afa9b86fb5bc9a37/original"/>
        </div>
        <div className="flex justify-center items-center flex-col mt-32">  
        <h1 className="text-[#00ed82] font-semibold text-sm tracking-wider">
        HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS
        </h1>
        <h1 className="text-black dark:text-white text-4xl font-semibold mt-8">Live TV Makes It Better</h1>
        <h1 className="text-black dark:text-white mt-8 text-lg text-center w-2/5">Get 90+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+.</h1>
        <button
              type="button"
              class="text-black mt-6 w-48 focus:outline-none bg-[#336e6b] hover:bg-green-200 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              GET HULU + LIVE TV
        </button>
        <h1 className="font-light text-[#A0A0A0] text-[11px] mt-3 w-3/5 text-center">Hulu (With Ads) + Live TV plan only. $76.99/mo (or then-current, regular monthly price). Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR recording is not available for on-demand shows.</h1>
        <h1 className="font-light text-[#A0A0A0] text-[11px] underline underline-offset-1">See details.</h1>
        <h1 className="text-white text-xl font-light underline underline-offset-1 mt-6">VIEW CHANNELS IN YOUR AREA →</h1>
       </div>
      </div>
      <div class="h-[700px] w-full flex justify-start items-around flex-col mt-16 bg-[url('https://cnbl-cdn.bamgrid.com/assets/3ab6ce86baaf4225b072c58fa9497ec949c0c9e284b3958ecda1429b7f3744f9/original')] bg-cover bg-no-repeat bg-center">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="h-1/2">
          <div className="flex">
            <div>
            <h1 className="text-white font-semibold text-xs">LIVE SPORTS</h1>
            <div className="bg-white h-1 w-26 mt-2"></div>
            </div>
            <h1 className="text-[#91969c] font-semibold ml-10 text-xs">BREAKING NEWS</h1>
            <h1 className="text-[#91969c] font-semibold ml-10 text-xs">BIGGEST EVENTS</h1>
          </div>
          <div>
            <h1 className="font-bold text-white text-5xl mt-8">Live Sports</h1>
            <h1 className="text-white w-[440px] font-light mt-8">Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more. Includes top local and national sports networks like ABC, CBS Sports Network, ESPN, FOX, FS1, TNT, NFL Network and more.</h1>
          </div>
          <div className="flex">
            <div className="w-12 h-12 bg-white rounded-full mt-6 flex justify-center align-center">
              <img className="m-auto" src="https://cnbl-cdn.bamgrid.com/assets/13aa152764ceb4047c7f902524efb09c2a56e75c95991d2eb708b97cb95c25fa/original"/>
            </div>
            <div className="w-12 h-12 bg-white rounded-full mt-6 flex justify-center align-center ml-6">
              <img className="m-auto" src="https://cnbl-cdn.bamgrid.com/assets/22943c5e9e0ee02501daa440ecbc2384e5e5255b6306a4100bb49bde19b1d6ca/original"/>
            </div>
            <div className="w-12 h-12 bg-white rounded-full mt-6 flex justify-center align-center ml-6">
              <img className="m-auto" src="https://cnbl-cdn.bamgrid.com/assets/1011985ada97696d9ac50c3ba59cfa50d0cebb41008519c5bbe0058f9c7fc079/original"/>
            </div>
            <div className="w-12 h-12 bg-white rounded-full mt-6 flex justify-center align-center ml-6">
              <img className="m-auto" src="https://cnbl-cdn.bamgrid.com/assets/1caca943330869aaf05bf9db4adfc269ac8879fe9cee6392eba96561522d0452/original"/>
            </div>
          </div>
          <div>
            <h1 className="font-light text-[#A0A0A0] text-[11px] mt-3">Live TV plan required. Regional restrictions, blackouts and additional terms apply.</h1>
            <h1 className="font-light text-[#A0A0A0] text-[11px] underline underline-offset-1">See details</h1>
          </div>
          </div>
        </div>
        <div className="w-1/2 h-full"/>
      </div>
      <div>
        <div>
          <h1 className="font-semibold text-5xl text-black dark:text-white text-center mt-16">Select Your Plan</h1>
          <h1 className="text-black dark:text-white font-light text-center mt-6">No hidden fees, equipment rentals, or installation appointments.</h1>
          <h1 className="text-black dark:text-white font-semibold text-center">Switch plans or cancel anytime.**</h1>
        </div>
        <div className="w-screen mt-6 flex justify-center align-center">
          <div className="w-3/4 h-[0.5px] bg-white"></div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-2/4 flex justify-around items-center">
          <div className="flex">
          <div>
            <h1 className="text-black dark:text-white font-semibold text-xs">BASE PLANS</h1>
            <img className="2xl:ml-6 xl:mr-2 mt-4 2xl:h-2 xl:h-2 lg:h-2 md:h-2" src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg"/>
          </div>
            <div className="ml-4 mr-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            </div>
          <div>
            <h1 className="text-black dark:text-white font-semibold text-xs">BUNDLE / SAVE</h1>
            <img className="2xl:h-2 xl:h-2 lg:h-2 md:h-2 mt-4" src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg"/>
          </div>
          </div>
          <div className="flex justify-center items-center flex-col ml-12">
          <button
              type="button"
              class="xl:text-xs xl:pt-2 lg:text-[10px] md:text-[10px] md:pt-[5px] text-center text-black mt-6  2xl:w-42 2xl:h-8 xl:w-48 xl:h-8 md:w-32 md:h-6 focus:outline-none bg-[#336e6b] hover:bg-green-200 focus:ring-4 focus:ring-green-300 font-semibold rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              MOST POPULAR
            </button>
            <h1 className="text-[#91969c] font-semibold 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px] mt-2">30 DAY FREE TRIAL</h1>
            <h1 className="text-black dark:text-white font-bold 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px] mt-2">Hulu (With Ads)</h1>
            <button class="bg-white 2xl:w-64 2xl:text-[16px] xl:w-52 xl:text-[14px] lg:w-44 lg:text-[12px] md:w-32 md:text-[10px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow mt-2">
              $7.99 MONTH
              </button>
          </div>
          <div className="flex justify-center items-center flex-col mt-16 ml-12">
            <h1 className="text-[#91969c] font-semibold 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px]">30 DAY FREE TRIAL</h1>
            <h1 className="text-black dark:text-white font-bold 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px] mt-2">Hulu (With Ads)</h1>
            <button class="bg-white 2xl:w-64 2xl:text-[16px] xl:w-52 xl:text-[14px] lg:w-44 lg:text-[12px] md:w-32 md:text-[10px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow mt-2">
              $17.99 MONTH
              </button>
          </div>
        </div>
        </div>
      </div>
      <div>
        <div className="w-screen mt-6 flex justify-center align-center mt-6">
          <div className="w-3/4 h-[0.5px] bg-white"></div>
        </div>
        <div className="flex text-black dark:text-white justify-between 2xl:ml-60 2xl:mr-60 xl:ml-48 lg:ml-40 md:ml-32 mt-6 text-xs">
          <h1>Monthly price</h1>
            <h1 className="2x:ml-72 xl:ml-64 lg:ml-48 md:ml-40">$7.99/mo.</h1>
            <h1 className="2xl:mr-[300px] xl:mr-[440px] lg:mr-[370px] md:mr-[270px]">$17.99/mo.</h1>
        </div>
        <div className="w-screen mt-6 flex justify-center align-center mt-6">
          <div className="w-3/4 h-[0.5px] bg-black dark:bg-white"></div>
        </div>
        <h1 className="font-light text-black dark:text-white text-[10px] mt-4 2xl:ml-60 2xl:mr-60 xl:ml-48 lg:ml-40 md:ml-32 mt-6 text-xs">
        †For current-season shows in the streaming library only<br/>
**Switches from Live TV to Hulu take effect as of the next billing cycle
        </h1>
        <div className="w-screen mt-6 flex justify-center align-center mt-6">
          <div className="w-3/4 h-[0.5px] bg-black dark:bg-white"></div>
        </div>
      </div>
      <div className="text-black dark:text-white mt-20">
        <div className="flex justify-around 2xl:ml-60 2xl:mr-32 xl:ml-48 xl:mr-36 lg:ml-40 lg:mr-24 md:ml-32 grid grid-cols-5 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6 text-xs">
          <div>
            <h1 className="font-bold">BROWSE</h1>
            <h1 className="font-light">Streaming Library</h1>
            <h1 className="font-light">Live TV</h1>
            <h1 className="font-light">Live News</h1>
            <h1 className="font-light">Live Sports</h1>
          </div>
          <div className="font-light">
            TV Shows<br/>
            Movies<br/>
            Originals<br/>
            Networks<br/>
            Kids<br/>
            FX
          </div>
          <div className="font-light">
            Max<br/>
            Cinemax<br/>
            Showtime<br/>
            STARZ
          </div>
          <div className="font-light">
          Disney Bundle Trio Basic <br/>
          Disney Bundle Trio Premium<br/>
          Disney Bundle Duo Basic<br/>
          Student Discount
          </div>
          <div className="font-light">
          <h1 className="font-bold">HELP</h1>
          <h1>Account & Billing</h1>
          <h1>Plans & Pricing</h1>
          <h1>Supported Devices</h1>
          <h1>Accessibility</h1>
          </div>
          <div className="font-light">
          <h1 className="font-bold">ABOUT US</h1>
          <h1>Shop Hulu</h1>
          <h1>Press</h1>
          <h1>Jobs</h1>
          <h1>Jobs</h1>
          <h1>Guides | What to Watch</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="w-screen mt-6 flex justify-center align-center mt-6">
          <div className="w-3/4 h-[0.5px] bg-black dark:bg-white"></div>
        </div>
        <div className="flex mt-12 2xl:ml-52 xl:ml-44 lg:ml-36 md:ml-28">
          <img className="ml-6" src="https://www.hulu.com/static/hitch/static/icons/facebook.svg"/>
          <img className="ml-6" src="https://www.hulu.com/static/hitch/static/icons/twitter.svg"/>
          <img className="ml-6" src="https://www.hulu.com/static/hitch/static/icons/youtube.svg"/>
          <img className="ml-6" src="https://www.hulu.com/static/hitch/static/icons/instagram.svg"/>
        </div>
        <div className="flex justify-around text-black dark:text-white text-[12px] 2xl:ml-60 2xl:mr-24 xl:ml-48 xl:mr-28 lg:ml-40 lg:mr-32 md:ml-32 mt-12 grid grid-cols-8 xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-4 gap-6">
        <h1>© 2023 Hulu, LLC</h1>
        <div className="flex">
          <img className="lg:w-6 h-6" src="https://c.evidon.com/pub/icon1.png"/>
          <h1 className="ml-2">About Ads</h1>
        </div>
        <h1>Subscriber Agreement</h1>
        <h1>Privacy Policy</h1>
        <h1>Do Not Sell or Share My Personal Information</h1>
        <h1>Your US State Privacy Rights</h1>
        <h1>TV Parental Guidelines</h1>
        <h1>Sitemap</h1>
        </div>
      </div>
    </div>
  );
}
