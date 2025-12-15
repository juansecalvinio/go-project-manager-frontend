import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/shadcn-ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn-ui/components/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/shadcn-ui/components/command";
import { cn } from "@/shadcn-ui/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value?: string;
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const Dropdown = ({
  options,
  value: controlledValue,
  onSelect,
  className,
  disabled = false,
  placeholder = "",
}: Props) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(options[0]?.value || "");

  // Usar valor controlado si existe, sino usar interno
  const value = controlledValue ?? internalValue;

  const handleSelect = (selectedValue: string) => {
    if (onSelect) {
      onSelect(selectedValue);
    } else {
      setInternalValue(selectedValue);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn("w-[200px] justify-between", className)}
        >
          {options.find((option) => option.value === value)?.label ||
            placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0", className)}>
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
