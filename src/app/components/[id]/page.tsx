import componentsMap from "@/constants/componentMap";
import { Timeline } from "@/components/Timeline/timeline";
import PreviewTabs from "./_components/preview-tabs";

export default function ComponentPage({ params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || !componentsMap[id]) {
    return <div>Component not found</div>;
  }

  const { data, component, settingsEngine } = componentsMap[id];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-start text-left ">
      <p className="text-3xl font-semibold tracking-tight">{data.title}</p>
      <p className="text-xl font-normal tracking-tight text-slate-400">
        {data.description}
      </p>
      <div className="mt-4 w-full">
        <PreviewTabs
          component={component}
          settingsEngine={settingsEngine}
          data={data}
        />
      </div>
      <div className="mt-8 hidden w-full lg:block">
        <p className="text-2xl font-semibold tracking-tight">Instalation</p>
        <div className="col-span-12 space-y-6 px-4 lg:col-span-9">
          <div className="relative col-span-8 ml-4 mt-4 space-y-8 px-4 before:absolute before:-left-3 before:bottom-1 before:top-2 before:w-0.5 before:bg-gray-700">
            <Timeline
              text={"Install the following dependencies"}
              dependencies={data?.dependencies}
            />
            <Timeline
              text={"Copy and paste the following code to your project"}
              code={data?.componentCode}
            />
            <Timeline text={"Update the import path"} />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        {data?.examples && (
          <>
            <p className="text-2xl font-semibold tracking-tight">Examples</p>
            <div className="grid w-full grid-cols-3 gap-4 lg:grid-cols-6">
              {data?.examples?.map((example: any, index: number) => (
                <div key={index} className="mx-2 my-2">
                  {example}
                </div>
              ))}
            </div>
          </>
        )}
        {data?.specialUseCase && (
          <>
            {data?.specialUseCase?.map((example: any) => (
              <div className="mt-8">
                <p className="text-2xl font-semibold tracking-tight">
                  {example.title}
                </p>
                <div className="mt-2">
                  <div className="mt-4 w-full">
                    <PreviewTabs
                      component={example.component}
                      data={example.data}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
