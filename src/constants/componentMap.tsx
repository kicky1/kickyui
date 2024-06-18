import ButtonExample from "@/preview/Button/button";
import { buttonCode } from "@/preview/Button/button-code";
import SettingsEngine from "@/preview/Button/settings-engine";
import { uiButtonCode } from "@/preview/Button/ui-button-code";

const componentsMap: any = {
  button: {
    component: <ButtonExample />,
    settingsEngine: <SettingsEngine />,
    data: {
      title: "Button",
      description: "Button description",
      code: buttonCode,
      componentCode: uiButtonCode,
    },
  },
  card: {
    component: <ButtonExample />,
    settingsEngine: <SettingsEngine />,
    data: {
      title: "Card",
      description: "Card description",
      code: `// Your card component code here`,
    },
  },
};

export default componentsMap;
