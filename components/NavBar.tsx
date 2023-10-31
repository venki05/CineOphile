import { Slider } from "./slider.tsx";

const logoStyle = "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white-900";

export default function Navbar() {
  return (
    <nav class="bg-[#D8DEE9]">
      <div class="me-auto max-w-8xl px-4 sm:px-8 lg:px-10">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="ml-6 flex space-x-8">
                <a
                  href="/"
                  class={logoStyle}
                >
                  Home
                </a>
            </div>
            <div class="ml-6 flex space-x-8 ">    
                <a 
                  href="/aboutus"
                  class={logoStyle}
                >
                  About Us
                </a>
            </div>
            <div class="ml-6 flex space-x-8">
                <a 
                  href="/"
                  class={logoStyle}
                >
                  Popular 
                </a>
            </div>
            <div class="ml-6 flex space-x-8">
                <a 
                  href="/"
                  class={logoStyle}
                >
                  Genre
                </a>
            </div>
          </div>
          <div class="flex mr-0">
             <div class="flex space-x-4">
              <img
                class="my-1"
                src="/logo.png"
                width="48"
                height="16"
                alt="our logo"
              />
              </div>
              <div class="flex ml-6 space-x-4 my-4">
              <Slider name="themeSelector" class="my-24"></Slider>
              </div>
              <div class="flex ml-6 space-x-4">
              <img
                class="my-1"
                src="/logo.png"
                width="48"
                height="16"
                alt="our logo"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}