import { type ReactNode, useEffect, useState } from "react";
import React from "react";

interface DataSourceProps {
  children: ReactNode;
  getData?: () => void;
  resourceName: string;
}

const DataSource = ({
  children,
  getData = () => {},
  resourceName,
}: DataSourceProps) => {
  const [state, setState] = useState<any>(null);
  const [error, setError] = useState<any | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getData();
        setState(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [getData]);

  return (
    <>
      {error ? (
        <p>{error}</p>
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
export default DataSource;
