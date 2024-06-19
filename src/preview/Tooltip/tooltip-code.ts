export const tooltipCode = `
import { Button } from "@/components/ui/Button/button";

type Props = {
  isLoading?: boolean;
}

export default function ButtonExample({ isLoading }: Props) {
  return (
    <>
      <Button
        onClick={() => console.log("clicked")}
        loading={isLoading}
        disabled={isLoading}
      >
        Button
      </Button>
    </>
  );
}

`;
