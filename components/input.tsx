import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      disabled={IS_BROWSER || props.disabled}
      class="px-2 py-1 border-gray-500 border-2 rounded text-gray-200 bg-black hover:bg-gray-900 transition-colors "
    />
  );
}

