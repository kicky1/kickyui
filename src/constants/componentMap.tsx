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
      description: "Button description",
      code: buttonCode,
      componentCode: uiButtonCode,
    },
  },
  tooltip: {
    component: <TooltipExample />,
    settingsEngine: <TooltipSettingsEngine />,
    data: {
      title: "Tooltip",
      description: "Tooltip description",
      code: tooltipCode,
      componentCode: uiTooltipCode,
    },
  },
};

export default componentsMap;
