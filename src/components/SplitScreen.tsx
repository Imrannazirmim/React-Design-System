import type { ReactNode } from "react";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;
  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;

  return (
    <main className="flex flex-1">
      <section style={{ width: leftWidth }} className="p-2">
        {left}
      </section>
      <section style={{ width: rightWidth }} className="p-2">
        {right}
      </section>
    </main>
  );
};
export default SplitScreen;
