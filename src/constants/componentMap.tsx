import ButtonAnimated from "@/components/Buttons/button-animated";
import ButtonExample from "@/preview/Button/button";
import { buttonCode } from "@/preview/Button/button-code";
import ButtonSettingsEngine from "@/preview/Button/settings-engine";
import { uiButtonCode } from "@/preview/Button/ui-button-code";
import TooltipSettingsEngine from "@/preview/Tooltip/settings-engine";
import TooltipExample from "@/preview/Tooltip/tooltip";
import { tooltipCode } from "@/preview/Tooltip/tooltip-code";
import { uiTooltipCode } from "@/preview/Tooltip/ui-tooltip-code";

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
      examples: [<ButtonAnimated />],
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
