import ButtonAnimated from "@/components/Buttons/button-animated";
import { buttonAnimatedCode } from "@/components/Buttons/button-animated-code";
import ButtonCosmic from "@/components/Buttons/button-cosmic";
import { buttonCosmicCode } from "@/components/Buttons/button-cosmic-code";
import { Button } from "@/components/ui/button";
import ButtonExample from "@/preview/Button/button";
import { buttonCode } from "@/preview/Button/button-code";
import ButtonSettingsEngine from "@/preview/Button/settings-engine";
import { uiButtonCode } from "@/preview/Button/ui-button-code";
import ToastSettingsEngine from "@/preview/Toast/settings-engine";
import ToastExample from "@/preview/Toast/toast-button";
import { toastCode } from "@/preview/Toast/toast-code";
import { uiToastCode } from "@/preview/Toast/ui-toast-code";
import TooltipSettingsEngine from "@/preview/Tooltip/settings-engine";
import TooltipExample from "@/preview/Tooltip/tooltip";
import { tooltipCode } from "@/preview/Tooltip/tooltip-code";
import { uiTooltipCode } from "@/preview/Tooltip/ui-tooltip-code";
import { ArrowRight, AxeIcon } from "lucide-react";

const componentsMap: any = {
  button: {
    component: <ButtonExample />,
    settingsEngine: <ButtonSettingsEngine />,
    data: {
      title: "Button",
      description:
        "Examples of tailwind css buttons created with help of shadcn and radix ui.",
      code: buttonCode,
      dependencies: "npm install @radix-ui/react-slot",
      componentCode: uiButtonCode,
      examples: [
        <Button variant="default">Button</Button>,
        <Button variant="secondary">Button</Button>,
        <Button variant="destructive">Button</Button>,
        <Button variant="outline">Button</Button>,
        <Button variant="ghost">Button</Button>,
        <Button variant="link">Button</Button>,
        <Button variant="shine">Button</Button>,
        <Button variant="hoverFromLeft">Button</Button>,
        <Button variant="hoverFromRight">Button</Button>,
        <Button variant="hoverFromBottom">Button</Button>,
        <Button variant="hoverFromTop">Button</Button>,
        <Button variant="linkHoverVisible">Button</Button>,
        <Button variant="linkHoverInvisible">Button</Button>,
        <Button variant="ringHover">Button</Button>,
        <Button variant="expandIcon">
          <ArrowRight />
        </Button>,
      ],
      specialUseCase: [
        {
          title: "Button Animated",
          component: <ButtonAnimated />,
          data: {
            code: buttonAnimatedCode,
          },
        },
        {
          title: "Button Cosmic",
          component: <ButtonCosmic />,
          data: {
            code: buttonCosmicCode,
          },
        },
      ],
    },
  },
  tooltip: {
    component: <TooltipExample />,
    settingsEngine: <TooltipSettingsEngine />,
    data: {
      title: "Tooltip",
      description:
        "Examples of tailwind css tooltips created with help of shadcn and radix ui.",
      code: tooltipCode,
      dependencies: "npm install @radix-ui/react-tooltip",
      componentCode: uiTooltipCode,
    },
  },
  toast: {
    component: <ToastExample />,
    settingsEngine: <ToastSettingsEngine />,
    data: {
      title: "Toast",
      description:
        "Examples of tailwind css toast created with help of shadcn and radix ui.",
      code: toastCode,
      dependencies: "npm install @radix-ui/react-toast",
      componentCode: uiToastCode,
    },
  },
};

export default componentsMap;
