import ClipboardButton from "@/app/components/[id]/_components/clipboard-button";
import Code from "../ui/code";

type Props = {
  text: string;
  code?: string;
  dependencies?: string;
};

export const Timeline = ({ text, dependencies, code }: Props) => {
  return (
    <div className="relative before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary">
      <div className="pt-1">{text}</div>
      {dependencies && (
        <div className="mt-2 rounded-md border bg-black p-2 ">
          <p className="relative pl-2 text-white">
            {dependencies}
            <ClipboardButton code={dependencies} isDependency />
          </p>
        </div>
      )}
      {code && (
        <div className="mt-2">
          <div className="relative">
            <Code code={code} lang="typescript" />
            <ClipboardButton code={code} />
          </div>
        </div>
      )}
    </div>
  );
};
