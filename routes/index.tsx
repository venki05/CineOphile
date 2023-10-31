import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pixel Perfect Pictures</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[rgb(236,239,244)]">
        <div class="flex flex-row space-x-5">
          <div class=" items-end justify-end">
            <img
              class="my-6"
              src="/logo.png"
              width="256"
              height="256"
              alt="our logo"
            />
          </div>
          <div class=" items-center justify-center text-center">
            <h1 class="text-2xl font-bold">
              Welcome to Pixel Perfect Pictures!!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
