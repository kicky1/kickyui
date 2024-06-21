import ClipboardButton from "@/app/components/[id]/_components/clipboard-button";
import Code from "../ui/Code/code";

type Props = {
  text: string;
  code?: string;
};

export const Timeline = ({ text, code }: Props) => {
  return (
    <div className="relative before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary">
      <div className="pt-1">{text}</div>
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
