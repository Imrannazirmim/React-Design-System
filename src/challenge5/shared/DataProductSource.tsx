import React, { type ReactNode, useEffect, useState } from "react";

interface DataProduct {
  resourceName: string;
  children: ReactNode;
  getDataProduct?: () => void;
}

const DataProductSource = ({
  getDataProduct = () => {},
  resourceName,
  children,
}: DataProduct) => {
  const [state, setState] = useState<any>(null);
  const [error, setError] = useState<any | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataProduct();
        setState(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [getDataProduct]);
  return (
    <>
      {error ? (
        <p className="text-xl text-red-600">{error}</p>
      ) : (
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              [resourceName]: state,
            });
          }
          return child;
        })
      )}
    </>
  );
};
export default DataProductSource;
