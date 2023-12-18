import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function TvShows() {
    const router = useRouter();

  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <div class="h-96 w-full flex justify-center items-center relative">
          <div class="absolute inset-0 bg-gradient-to-b from-purple-900 to-red-300"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          <div class="text-white text-center relative z-10">
            <h2 class="text-sm font-medium text-gray-300">
              ALL YOUR FAVORITE TV IN ONE PLACE
            </h2>
            <h1 class="text-2xl font-sans">
              Watch thousands of shows and movies, With plans starting{" "}
            </h1>
            <h1 class="text-2xl font-sans mb-2">at $7.99/month.</h1>
            <div class="p-2 h-14 w-1/3 rounded-md text-black bg-white mr-4 font-bold flex justify-center items-center ml-48 hover:text-blue-500">
              START YOUR FREE TRIAL
            </div>
            <div class="text-xs text-gray-300 mt-3 font-sans">
              Hulu free trial available for new and eligible returning Hulu
              subscribers only. Cancel anytime. Additional terms apply.
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="bg-white shadow-md p-4 fixed top-0 w-full ">
          <div class="container mx-auto flex items-center justify-between w-full ">
            <div class="flex space-x-4 ">
              <img
              onClick={()=>router.push("http://localhost:3001/")}
                src="https://1000logos.net/wp-content/uploads/2021/04/Hulu-logo.png"
                alt="Hulu Logo"
                class="h-8"
              ></img>
              <div class="hidden space-x-6 lg:flex">
                <a href="#" class="text-gray-800 font-bold hover:text-blue-500">
                  TV Shows
                </a>
                <a href="#" class="text-gray-800 font-bold hover:text-blue-500">
                  Movies
                </a>
                <a href="#" class="text-gray-800 font-bold hover:text-blue-500">
                  Originals
                </a>
                <a href="#" class="text-gray-800 font-bold hover:text-blue-500">
                  Kids
                </a>
                <a href="#" class="text-gray-800 font-bold hover:text-blue-500">
                  Networks
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-4 justify-end -mr-40">
                <div class="p-2 rounded-md text-white  mr-4 font-bold hover:bg-black-800">
                  Start your free trial
                </div>
                <button class="text-gray-800 text-white px-4 py-2 rounded-md font-bold">
                  Login
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto min-h-screen overflow-y-auto w-full mb-8 ">
          <div class="text-5xl font-bold mt-6 ml-12">TV Shows</div>
          <div class="ml-12 gap-6 mt-6 flex grid ">
            <div class="">
              <div class="text-lg font-semibold">Newly added TV shows</div>
              <div class=" flex flex-nowrap gap-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 cols-1">
                <div class="relative border border-gray-300 rounded-lg overflow-hidden">
                  <img
                    src="https://img1.hulu.com/user/v3/artwork/a251e6b7-de18-4159-be66-537c5d006ebb?base_image_bucket_name=image_manager&base_image=c1d8f568-61be-4316-8633-85e554cc10cb&size=550x825&format=jpeg"
                    alt="Image 1"
                    class="w-full h-full object-cover"
                  ></img>
                  <img
                    src="https://img1.hulu.com/user/v3/artwork/a251e6b7-de18-4159-be66-537c5d006ebb?base_image_bucket_name=image_manager&base_image=27cbcbca-6c34-49f1-b466-e58f5972a73e&size=210x42|max&format=png"
                    alt="Logo"
                    class="absolute bottom-20 left-4 h-10 "
                  ></img>
                  <div class="absolute bottom-1 h-20 text-white text-sm mt-4 left-8 transform translate-y-3 -ml-2">
                    TV14 • Holiday, Adventure • TV Series (2022)
                    <svg
                      class="inline-block h-4 w-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                  <div class="p-4"></div>
                </div>
                <div class="relative border border-gray-300 rounded-lg  overflow-hidden ">
                  <img
                    src="https://img4.hulu.com/user/v3/artwork/bd74b544-7840-4066-aef0-1385ceb8d6a5?base_image_bucket_name=image_manager&base_image=f1173d40-93c0-4189-8d88-624ccc474884&size=550x825&format=jpeg"
                    alt="Image 1"
                    class="w-full h-full object-cover"
                  ></img>
                  <div class="p-4">
                    <img
                      src="https://img4.hulu.com/user/v3/artwork/bd74b544-7840-4066-aef0-1385ceb8d6a5?base_image_bucket_name=image_manager&base_image=1bbaa045-daac-43bc-a84f-b672b688f13c&size=210x42|max&format=png"
                      alt="Logo"
                      class="absolute bottom-20 left-4 h-10 "
                    ></img>
                    <div class="absolute bottom-1 h-20 text-white text-sm mt-4 left-6 transform translate-y-3 -ml-2">
                      TVMA • Sitcom, Comedy • TV Series (2023)
                      <svg
                        class="inline-block h-4 w-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="relative border border-gray-300 rounded-lg  overflow-hidden ">
                  <img
                    src="https://img.hulu.com/user/v3/artwork/df34ff9c-c99d-4a11-9643-9ce348ae8bfd?base_image_bucket_name=image_manager&base_image=2b79198b-800d-4c0b-a7dc-2cc00162cccb&size=550x825&format=jpeg"
                    alt="Image 1"
                    class="w-full h-full object-cover"
                  ></img>
                  <div class="p-4">
                    <img
                      src="https://img.hulu.com/user/v3/artwork/df34ff9c-c99d-4a11-9643-9ce348ae8bfd?base_image_bucket_name=image_manager&base_image=3ccf6c93-8675-45ca-81ec-9d1cf4cb494d&size=210x42|max&format=png"
                      alt="Logo"
                      class="absolute bottom-20 left-4 h-10 "
                    ></img>
                    <div class="absolute bottom-1 h-20 text-white text-sm mt-4 left-6 transform translate-y-3 -ml-2">
                      TVPG • Holiday, Award Shows & Events • TV Series...
                      <svg
                        class="inline-block h-4 w-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="relative border border-gray-300 rounded-lg  overflow-hidden ">
                  <img
                    src="https://img1.hulu.com/user/v3/artwork/59156f18-314a-4daa-a2b2-0eecd39e365d?base_image_bucket_name=image_manager&base_image=133914ac-3c76-49df-a04c-35de04c116e9&size=550x825&format=jpeg"
                    alt="Image 1"
                    class="w-full h-full object-cover"
                  ></img>
                  <div class="p-4">
                    <img
                      src="https://img1.hulu.com/user/v3/artwork/59156f18-314a-4daa-a2b2-0eecd39e365d?base_image_bucket_name=image_manager&base_image=2c61aa84-ee22-47b5-97d1-bfcfa690e6f0&size=210x42|max&format=png"
                      alt="Logo"
                      class="absolute bottom-20 left-4 h-10 "
                    ></img>
                    <div class="absolute bottom-1 h-20 text-white text-sm mt-4 left-6 transform translate-y-3 -ml-2">
                      Award Shows & Events, Documentaries • TV Series...
                      <svg
                        class="inline-block h-4 w-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="relative border border-gray-300 rounded-lg  overflow-hidden mr-6 ">
                  <img
                    src="https://img.hulu.com/user/v3/artwork/36964333-eef2-4aeb-a4c1-930cb03d475b?base_image_bucket_name=image_manager&base_image=8c35bbd4-6908-44b8-9d1d-0514671f3223&size=550x825&format=jpeg"
                    alt="Image 1"
                    class="w-full h-full object-cover"
                  ></img>
                  <div class="p-4">
                    <img
                      src="https://img.hulu.com/user/v3/artwork/36964333-eef2-4aeb-a4c1-930cb03d475b?base_image_bucket_name=image_manager&base_image=6b24a92d-e4bc-4396-95d9-7252a9a214de&size=210x42|max&format=png"
                      alt="Logo"
                      class="absolute bottom-20 left-4 h-10 "
                    ></img>
                    <div class="absolute bottom-1 h-20 text-white text-sm mt-4 left-6 transform translate-y-3 -ml-2">
                      TV14 • Reality • TV Series (2013)
                      <svg
                        class="inline-block h-4 w-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 ml-12 w-full">
          <div class="text-lg font-semibold mb-12">POPULAR</div>
          <div class="flex flex-row space-x-8 mt-6 w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
            <div class="flex-shrink-0">
              <img
                src="https://img3.hulu.com/user/v3/artwork/3c3c0f8b-7366-4d15-88ab-18050285978e?base_image_bucket_name=image_manager&base_image=46bbfaea-d8ae-48bc-83c4-883e217a8b36&size=600x338&format=jpeg"
                alt="Family Guy"
                class="rounded-xl h-40"
              ></img>
              <div class="font-medium mt-2">Family Guy</div>
              <div class="text-gray-500 text-sm">
                TV14 • Comedy, Animation • TV Series (1999)
              </div>
            </div>
            <div class="flex-shrink-0">
              <img
                src="https://img.hulu.com/user/v3/artwork/fdeb1018-4472-442f-ba94-fb087cdea069?base_image_bucket_name=image_manager&base_image=5c5d5803-d5af-4362-9ffe-5855c8338b7e&size=600x338&format=jpeg"
                alt="Title 2"
                class="rounded-xl h-40"
              ></img>
              <div class="font-medium mt-2">Bob's Burgers</div>
              <div class="text-gray-500 text-sm">
                TV14 • Adult Animation, Comedy • TV Series...
              </div>
            </div>
            <div class="flex-shrink-0">
              <img
                src="https://img4.hulu.com/user/v3/artwork/d76d6361-3fbf-4842-8dd7-e05520557280?base_image_bucket_name=image_manager&base_image=fd92659b-534b-49d2-af0a-799184549e98&size=600x338&format=jpeg"
                alt="Title 3"
                class="rounded-xl h-40"
              ></img>
              <div class="font-medium mt-2">Rick and Morty</div>
              <div class="text-gray-500 text-sm">
                TV14 • Comedy, Animation • TV Series (2013)
              </div>
            </div>
            <div class="flex-shrink-0">
              <img
                src="https://img1.hulu.com/user/v3/artwork/5ab259ca-73c0-4d59-a6f6-0208e1a4bfd2?base_image_bucket_name=image_manager&base_image=c5925fcd-f41a-4550-a713-499e28d301e0&size=600x338&format=jpeg"
                alt="Title 3"
                class="rounded-xl h-40"
              ></img>
              <div class="font-medium mt-2">The Gilded Age</div>
              <div class="text-gray-500 text-sm">
                TVMA • Drama, History • TV Series (2022)
              </div>
            </div>
            <div class="flex-shrink-0">
              <img
                src="https://img4.hulu.com/user/v3/artwork/7840bf30-f440-48d4-bf81-55d8cb24457a?base_image_bucket_name=image_manager&base_image=d6e344b6-a159-441d-a95b-545db33edfdd&size=600x338&format=jpeg"
                alt="Title 3"
                class="rounded-xl h-40"
              ></img>
              <div class="font-medium mt-2">The Kardashians</div>
              <div class="text-gray-500 text-sm">
                TV14 • Reality • TV Series (2022){" "}
              </div>
            </div>
            <div class="flex-shrink-0">
              <img
                src="https://img1.hulu.com/user/v3/artwork/b909844e-8d23-4a88-8951-da8d83d1c4f4?base_image_bucket_name=image_manager&base_image=335153ec-0ba8-49a4-93dc-6a1aa6425575&size=600x338&format=jpeg"
                alt="Title 3"
                class="rounded-xl h-40"
              ></img>
              <div class="font-medium mt-2">Krapopolis</div>
              <div class="text-gray-500 text-sm">
                TV14 • Comedy, Animation • TV Series (2023)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}