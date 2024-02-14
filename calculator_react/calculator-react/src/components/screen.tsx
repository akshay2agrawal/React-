import { Textfit } from "react-textfit";
import "../css/screen.css";

interface Props {
  value: string;
  className: string;
}

const Screen = ({ value, className }: Props) => {
  return (
    <Textfit className={className} mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
