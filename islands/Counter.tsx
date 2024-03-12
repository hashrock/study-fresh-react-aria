import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "https://esm.sh/react-aria-components@1.1.1?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&deps=preact@10.19.2";


export default function Demo() {
  return (
    <div class="flex gap-8 py-6">
      <Select>
        <Label>Favorite Animal</Label>
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </Button>
        <Popover>
          <ListBox>
            <ListBoxItem>Cat</ListBoxItem>
            <ListBoxItem>Dog</ListBoxItem>
            <ListBoxItem>Kangaroo</ListBoxItem>
          </ListBox>
        </Popover>
      </Select>
    </div>
  );
}
