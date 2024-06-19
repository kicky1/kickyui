import create from "zustand";
import { immer } from "../immerMiddleware";
import { Draft } from "immer";

type EngineSettingsStoreState = {
  loading: boolean;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size: "default" | "sm" | "lg" | "icon";
  tooltipText: string;
  setLoading: (loading: boolean) => void;
  setVariant: (
    variant:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link",
  ) => void;
  setSize: (size: "default" | "sm" | "lg" | "icon") => void;
  setTooltipText: (tooltipText: string) => void;
};

export const useAuthorizationStore = create<EngineSettingsStoreState>(
  immer(
    (
      set: (fn: (draft: Draft<EngineSettingsStoreState>) => void) => void,
    ): EngineSettingsStoreState => ({
      loading: false,
      variant: "default",
      size: "default",
      tooltipText: "",
      setLoading: (loading) => {
        set((state) => {
          state.loading = loading;
        });
      },
      setVariant: (variant) => {
        set((state) => {
          state.variant = variant;
        });
      },
      setSize: (size) => {
        set((state) => {
          state.size = size;
        });
      },
      setTooltipText: (tooltipText) => {
        set((state) => {
          state.tooltipText = tooltipText;
        });
      },
    }),
  ),
);

export const { setLoading, setVariant, setSize, setTooltipText } =
  useAuthorizationStore.getState();
