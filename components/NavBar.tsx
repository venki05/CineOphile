const logoStyle = `inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900`;

export default function Navbar() {
  return (
    <nav class="bg-[#D8DEE9]">
      <div class="me-auto max-w-7xl px-4 sm:px-8 lg:px-10">
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
                  href="/"
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
        </div>
      </div>
    </nav>
  );
}