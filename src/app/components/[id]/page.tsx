import Code from "@/components/Code/code";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/Tabs/tabs";
import componentsMap from "@/constants/componentMap";
import ClipboardButton from "./_components/ClipboardButton";

export default function ComponentPage({ params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || !componentsMap[id as string]) {
    return <div>Component not found</div>;
  }

  const { data, component } = componentsMap[id as string];

  return (
    <div className="flex w-full flex-col items-start justify-start text-left">
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
          <TabsContent
            value="preview"
            className="w-full rounded-b-lg rounded-tr-lg"
          >
            {component}
          </TabsContent>
          <TabsContent value="code" className="rounded-lg">
            <div className="relative mx-auto max-w-6xl">
              <Code code={data.code} lang="typescript" />
              <ClipboardButton code={data.code} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
