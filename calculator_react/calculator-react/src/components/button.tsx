interface Props {
  buttonName: any;
  buttonValue: any;
  classes?: string;
  onClick: (btn: any) => void;
}

const Button = ({ buttonName, buttonValue, classes, onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn " + classes}
      value={buttonValue}
      onClick={() => onClick(buttonValue)}
    >
      {buttonName}
    </button>
  );
};

export default Button;
