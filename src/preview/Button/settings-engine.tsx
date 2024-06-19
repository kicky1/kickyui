"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/select";
import {
  setLoading,
  setSize,
  setTooltipText,
  setVariant,
  useEngineSettingsStore,
} from "@/zustand/stores/useEngineSettings";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";
import { Input } from "@/components/ui/Input/input";

export default function ButtonSettingsEngine() {
  const loading = useEngineSettingsStore((state) => state.loading);
  const variant = useEngineSettingsStore((state) => state.variant);
  const tooltipText = useEngineSettingsStore((state) => state.tooltipText);

  const handleChangeVariant = (
    value:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link",
  ) => {
    setVariant(value);
  };

  const handleChangeSize = (value: "default" | "sm" | "lg" | "icon") => {
    setSize(value);
  };

  const handleChangeLoading = (loading: boolean) => {
    setLoading(loading);
  };

  const handleChangeTooltipText = (tooltipText: string) => {
    setTooltipText(tooltipText);
  };

  return (
    <>
      <div className="mx-auto">
        <Select onValueChange={handleChangeVariant}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Variants</SelectLabel>
              <SelectItem value="default">default</SelectItem>
              <SelectItem value="destructive">destructive</SelectItem>
              <SelectItem value="outline">outline</SelectItem>
              <SelectItem value="secondary">secondary</SelectItem>
              <SelectItem value="ghost">ghost</SelectItem>
              <SelectItem value="link">link</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mx-auto mt-4">
        <Select onValueChange={handleChangeSize}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sizes</SelectLabel>
              <SelectItem value="default">default</SelectItem>
              <SelectItem value="sm">sm</SelectItem>
              <SelectItem value="lg">lg</SelectItem>
              <SelectItem value="icon">icon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mx-auto mt-4">
        <Input
          placeholder="Tooltip text"
          value={tooltipText}
          onChange={(e) => handleChangeTooltipText(e.target.value)}
          className="w-[180px]"
        />
      </div>
      <div className="mx-auto mt-4">
        <div className="items-top flex space-x-2">
          <Checkbox
            checked={loading}
            onCheckedChange={() => handleChangeLoading(!loading)}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Loading
          </label>
        </div>
      </div>
    </>
  );
}
