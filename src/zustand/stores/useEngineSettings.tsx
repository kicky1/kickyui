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
    | "hoverFromLeft"
    | "hoverFromRight"
    | "hoverFromBottom"
    | "hoverFromTop"
    | "shine"
    | "expandIcon"
    | "linkHoverVisible"
    | "linkHoverInvisible"
    | "ringHover"
    | "link";
  size: "default" | "sm" | "lg" | "icon";
  tooltipText: string;
  isArrow: boolean;
  setLoading: (loading: boolean) => void;
  setVariant: (
    variant:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "hoverFromLeft"
      | "hoverFromRight"
      | "hoverFromBottom"
      | "hoverFromTop"
      | "shine"
      | "expandIcon"
      | "linkHoverVisible"
      | "linkHoverInvisible"
      | "ringHover"
      | "link",
  ) => void;
  setSize: (size: "default" | "sm" | "lg" | "icon") => void;
  setTooltipText: (tooltipText: string) => void;
  setIsArrow: (isArrow: boolean) => void;
};

export const useEngineSettingsStore = create<EngineSettingsStoreState>(
  immer(
    (
      set: (fn: (draft: Draft<EngineSettingsStoreState>) => void) => void,
    ): EngineSettingsStoreState => ({
      loading: false,
      variant: "expandIcon",
      size: "default",
      tooltipText: "",
      isArrow: false,
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
      setIsArrow: (isArrow) => {
        set((state) => {
          state.isArrow = isArrow;
        });
      },
    }),
  ),
);

export const { setLoading, setVariant, setSize, setTooltipText, setIsArrow } =
  useEngineSettingsStore.getState();
