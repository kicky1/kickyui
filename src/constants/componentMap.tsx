import ButtonAnimated from "@/components/Buttons/button-animated";
import { buttonAnimatedCode } from "@/components/Buttons/button-animated-code";
import { Button } from "@/components/ui/Button/button";
import ButtonExample from "@/preview/Button/button";
import { buttonCode } from "@/preview/Button/button-code";
import ButtonSettingsEngine from "@/preview/Button/settings-engine";
import { uiButtonCode } from "@/preview/Button/ui-button-code";
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
      componentCode: uiTooltipCode,
    },
  },
};

export default componentsMap;
