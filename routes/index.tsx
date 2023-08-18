import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export default function Home() {
  return (
    <>
      <Head>
        <title>railway-project</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#a3ebbd]">
        <div class="flex flex-row space-x-5">
          <div class=" items-end justify-end">
            <img
              class="my-6"
              src="/logo.svg"
              width="512"
              height="512"
              alt="our logo"
            />
          </div>
          <div class=" items-center justify-center text-center">
            <h1 class="text-2xl font-bold">
              Welcome to CineOPhile!!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
