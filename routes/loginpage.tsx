import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { Input } from "../components/input.tsx";
import { Button } from "../components/Button.tsx";

export default function Home() {
  return (
    <>
      <Head>
          <title>Login</title>
      </Head>
      <div class="flex flex-row space-x-5 px-4 py-4 mx-auto">
        <form method="post" action="/api/login">
          <div>
            <Input type="text" name="username" placeholder="Username" class = "mx-4"/>
          </div>
          <div>
          <Input type="password" name="password" placeholder="Password" class = "mx-4" />
          </div>
          <div class="justify-center">
            <Button type="submit"  class = "items-center mx-4">Submit</Button>
          </div>
            
      </form>
      </div>
    </>
  );
}
