
interface RenderListProps {
  data: any[];
  resourceName: string;
  dataToRender: any;
}

const RenderList = ({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: RenderListProps) => {
  return (
    <div>
      {data.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};
export default RenderList;

