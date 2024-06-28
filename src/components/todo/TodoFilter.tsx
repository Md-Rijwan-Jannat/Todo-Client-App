import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAppDispatch } from "@/redux/hooks";
import { highToLow, lowToHigh, medium } from "@/redux/features/todoSlice";

const TodoFilter = () => {
  const [position, setPosition] = React.useState("bottom");
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient font-semibold">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            onClick={() => dispatch(highToLow())}
            value="high"
          >
            High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={() => dispatch(medium())}
            value="medium"
          >
            Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={() => dispatch(lowToHigh())}
            value="low"
          >
            low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
