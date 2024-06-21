import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/Tabs/tabs";
import ClipboardButton from "./clipboard-button";
import Code from "@/components/ui/Code/code";

type Props = {
  component: React.ReactNode;
  settingsEngine: React.ReactNode;
  data: {
    title: string;
    description: string;
    code: string;
    componentCode: string;
  };
};

export default function PreviewTabs({
  component,
  settingsEngine,
  data,
}: Props) {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <div className="flex flex-col lg:flex-row">
        <div className="basis-1 pr-2 lg:basis-3/5">
          <TabsContent
            value="preview"
            className="bg-gradient h-[250px] w-full content-center rounded-b-lg rounded-tr-lg bg-repeat"
          >
            <div>
              <div className="flex justify-center">{component}</div>
            </div>
          </TabsContent>
        </div>
        <div className="basis:1 mt-2 lg:mt-0 lg:basis-2/5">
          <TabsContent
            value="preview"
            className="bg-gradient h-[250px] w-full content-center rounded-lg rounded-tr-lg bg-repeat"
          >
            <div className="flex flex-col justify-center">{settingsEngine}</div>
          </TabsContent>
        </div>
      </div>
      <TabsContent value="code" className="rounded-lg ">
        <div className="relative mx-auto max-w-6xl">
          <Code code={data.code} lang="typescript" />
          <ClipboardButton code={data.code} />
        </div>
      </TabsContent>
    </Tabs>
  );
}
