import ButtonExample from "@/preview/Button/button";
import { buttonCode } from "@/preview/Button/button-code";


const componentsMap: any = {
  button: {
    component: <ButtonExample />,
    data: {
      title: "Button",
      description: "Button description",
      code: buttonCode,
    },
  },
  card: {
    component: <ButtonExample />,
    data: {
      title: "Card",
      description: "Card description",
      code: `// Your card component code here`,
    },
  },
};

export default componentsMap;
