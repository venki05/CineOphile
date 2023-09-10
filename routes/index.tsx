import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Input } from "../components/input.tsx";
import { Button } from "../components/Button.tsx";
import { Slider } from "../components/slider.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>CineOphile</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#ECEFF4]">
        <div class="flex flex-row space-x-5">
          <div class=" items-end justify-end">
            <img
              class="my-6"
              src="/logo.png"
              width="512"
              height="512"
              alt="our logo"
            />
          </div>
          <div class=" items-center justify-center text-center">
            <h1 class="text-2xl font-bold">
              Welcome to CineOPhile!!
            </h1>
            <Button>submit</Button>
            <form>
              <Input placeholder="Hello world"/>
              <Slider />
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
