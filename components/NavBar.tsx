import { useSignal } from "@preact/signals";
import { Slider } from "./slider.tsx";

const logoStyle =
  "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white-900";

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
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <img
                    class="my-1"
                    src="/login-avatar.png"
                    width="48"
                    height="16"
                    alt="our logo"
                  />
                </button>
              </div>

              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex={useSignal(-1)}
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex={useSignal(-1)}
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex={useSignal(-1)}
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex={useSignal(-1)}
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="GET" action="/logout" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex={useSignal(-1)}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="flex space-x-4">
              <img
                class="my-1"
                src="/light-mode.png"
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
                src="/dark-mode.png"
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
