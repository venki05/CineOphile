import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[rgb(236,239,244)]">
        <div class="flex flex-row space-x-5">
          <div class=" items-center justify-center text-center">
            <h1 class="text-2xl font-bold text-center">
                Welcome to Pixel Perfect Pictures!!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}