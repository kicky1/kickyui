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
  setVariant,
  useAuthorizationStore,
} from "@/zustand/stores/useEngineSettings";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";

export default function SettingsEngine() {
  const loading = useAuthorizationStore((state) => state.loading);
  const variant = useAuthorizationStore((state) => state.variant);

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

  const handleChangeLoading = (loading: boolean) => {
    setLoading(loading);
  };

  return (
    <>
      <div>
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
              <SelectItem value="icon">icon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
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
