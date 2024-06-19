import Code from "@/components/ui/Code/code";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/Tabs/tabs";
import componentsMap from "@/constants/componentMap";
import ClipboardButton from "./_components/ClipboardButton";
import { Timeline } from "@/components/Timeline/timeline";

export default function ComponentPage({ params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || !componentsMap[id as string]) {
    return <div>Component not found</div>;
  }

  const { data, component, componentCode, settingsEngine } =
    componentsMap[id as string];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-start text-left">
      <h2 className="text-3xl font-semibold tracking-tight">{data.title}</h2>
      <h3 className="text-2xl font-normal tracking-tight text-slate-400">
        {data.description}
      </h3>
      <div className="mt-4 w-full">
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <div className="flex flex-row">
            <div className="basis-3/5 pr-2">
              <TabsContent
                value="preview"
                className="h-[250px] w-full content-center rounded-b-lg rounded-tr-lg"
              >
                <div>
                  <div className="flex  justify-center">{component}</div>
                </div>
              </TabsContent>
            </div>
            <div className="basis-2/5">
              <TabsContent
                value="preview"
                className="h-[250px] w-full content-center rounded-lg rounded-tr-lg"
              >
                <div className="flex flex-col justify-center">
                  {settingsEngine}
                </div>
              </TabsContent>
            </div>
          </div>
          <TabsContent value="code" className="rounded-lg">
            <div className="relative mx-auto max-w-6xl">
              <Code code={data.code} lang="typescript" />
              <ClipboardButton code={data.code} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-8 w-full">
        <h3 className="text-2xl font-semibold tracking-tight">Instalation</h3>
        <div className="col-span-12 space-y-6 px-4 lg:col-span-9">
          <div className="relative col-span-8 ml-4 mt-4 space-y-8 px-4 before:absolute before:-left-3 before:bottom-1 before:top-2 before:w-0.5 before:bg-gray-700">
            <Timeline text={"Install the following dependencies"} />
            <Timeline
              text={"Copy and paste the following code to your project"}
              code={data?.componentCode}
            />
            <Timeline text={"Update the import path"} />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <h3 className="text-2xl font-semibold tracking-tight">Examples</h3>
        <div className="mt-4">Button 1</div>
      </div>
    </div>
  );
}
