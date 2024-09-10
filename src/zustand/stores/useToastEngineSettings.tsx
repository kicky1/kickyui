import create from "zustand";
import { immer } from "../immerMiddleware";
import { Draft } from "immer";

type ToastEngineSettingsStoreState = {
  toastTitle: string;
  toastDescription: string;
  toastVariant: "default" | "danger" | "success" | "warning" | "info";
  toastPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  toastDuration: number;
  setToastTitle: (toastTitle: string) => void;
  setToastDescription: (toastDescription: string) => void;
  setToastVatiant: (
    toastVariant: "default" | "danger" | "success" | "warning" | "info",
  ) => void;
  setToastPosition: (
    toastPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right",
  ) => void;
  setToastDuration: (toastDuration: number) => void;
};

export const useToastEngineSettingsStore =
  create<ToastEngineSettingsStoreState>(
    immer(
      (
        set: (
          fn: (draft: Draft<ToastEngineSettingsStoreState>) => void,
        ) => void,
      ): ToastEngineSettingsStoreState => ({
        toastTitle: "Toast tittle",
        toastDescription: "Toast description",
        toastVariant: "default",
        toastPosition: "bottom-right",
        toastDuration: 4000,
        setToastTitle: (toastTitle) => {
          set((state) => {
            state.toastTitle = toastTitle;
          });
        },
        setToastDescription: (toastDescription) => {
          set((state) => {
            state.toastDescription = toastDescription;
          });
        },
        setToastVatiant: (toastVariant) => {
          set((state) => {
            state.toastVariant = toastVariant;
          });
        },
        setToastPosition: (toastPosition) => {
          set((state) => {
            state.toastPosition = toastPosition;
          });
        },
        setToastDuration: (toastDuration) => {
          set((state) => {
            state.toastDuration = toastDuration;
          });
        },
      }),
    ),
  );

export const {
  setToastVatiant,
  setToastPosition,
  setToastDuration,
  setToastTitle,
  setToastDescription,
} = useToastEngineSettingsStore.getState();
