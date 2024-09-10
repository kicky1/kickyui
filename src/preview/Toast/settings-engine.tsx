"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  setToastDescription,
  setToastDuration,
  setToastPosition,
  setToastTitle,
  setToastVatiant,
  useToastEngineSettingsStore,
} from "@/zustand/stores/useToastEngineSettings";

export default function ToastSettingsEngine() {
  const toastTitle = useToastEngineSettingsStore((state) => state.toastTitle);
  const toastDescription = useToastEngineSettingsStore(
    (state) => state.toastDescription,
  );
  const toastVariant = useToastEngineSettingsStore(
    (state) => state.toastVariant,
  );
  const toastPosition = useToastEngineSettingsStore(
    (state) => state.toastPosition,
  );
  const toastDuration = useToastEngineSettingsStore(
    (state) => state.toastDuration,
  );

  const handleChangeTtile = (value: string) => {
    setToastTitle(value);
  };

  const handleChangeDescription = (value: string) => {
    setToastDescription(value);
  };

  const handleChangeDuration = (value: number) => {
    setToastDuration(value);
  };

  const handleChangeVariant = (
    value: "default" | "danger" | "success" | "warning" | "info",
  ) => {
    setToastVatiant(value);
  };

  const handleChangePosition = (
    value: "top-left" | "top-right" | "bottom-left" | "bottom-right",
  ) => {
    setToastPosition(value);
  };

  return (
    <ScrollArea className="mx-auto h-[200px]">
      <Input
        placeholder="Title"
        value={toastTitle}
        onChange={(e) => handleChangeTtile(e.target.value)}
        className="w-full"
      />
      <div className="mt-4">
        <Input
          placeholder="Description"
          value={toastDescription}
          onChange={(e) => handleChangeDescription(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mt-4">
        <Select onValueChange={handleChangeVariant} value={toastVariant}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Variants</SelectLabel>
              <SelectItem value="default">default</SelectItem>
              <SelectItem value="danger">danger</SelectItem>
              <SelectItem value="success">success</SelectItem>
              <SelectItem value="warning">warning</SelectItem>
              <SelectItem value="info">info</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <Select onValueChange={handleChangePosition} value={toastPosition}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Position</SelectLabel>
              <SelectItem value="top-left">top-left</SelectItem>
              <SelectItem value="top-right">top-right</SelectItem>
              <SelectItem value="bottom-left">bottom-left</SelectItem>
              <SelectItem value="bottom-right">bottom-right</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <Input
          placeholder="Duration"
          type="number"
          onChange={(e) => handleChangeDuration(Number(e.target.value))}
          className="w-full"
          value={toastDuration}
        />
      </div>
    </ScrollArea>
  );
}
