import {Button} from 'https://esm.sh/react-aria-components@1.1.1?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&deps=preact@10.19.6';
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Demo() {
  if(!IS_BROWSER) {
    return (
      <div class="flex gap-8 py-6">
      </div>
    );
  }

  return (
    <div class="flex gap-8 py-6">
      <Button onPress={() => alert('Hello world!')}>Press me</Button>
    </div>
  );
}
