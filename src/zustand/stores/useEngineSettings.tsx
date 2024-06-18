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
    | "link"
    | "icon";
  setLoading: (loading: boolean) => void;
  setVariant: (
    variant:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link"
      | "icon",
  ) => void;
};

export const useAuthorizationStore = create<EngineSettingsStoreState>(
  immer(
    (
      set: (fn: (draft: Draft<EngineSettingsStoreState>) => void) => void,
    ): EngineSettingsStoreState => ({
      loading: false,
      variant: "default",
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
    }),
  ),
);

export const { setLoading, setVariant } = useAuthorizationStore.getState();
