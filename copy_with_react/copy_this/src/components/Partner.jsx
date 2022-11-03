import { Children } from "react";
export default function Partner({ partner, children }) {
  return (
    <>
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
      <p>{partner}</p>
    </>
  );
}
