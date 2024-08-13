import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: PropsWithChildren) => {
  const portalElement = document.getElementById("portal");
  return ReactDOM.createPortal(<>{children}</>, portalElement!);
};

export default Portal;
