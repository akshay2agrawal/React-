// using children Prop (pre defined variable name), we can pass children to a component i.e, some bigger text than a one liner while called in App component.

import { ReactNode } from "react";

// ReactNode is a predefined class which can store html data as an argument passed into a component.
interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
