interface Props {
  children: string;
  color?: string; //using question mark here makes it not compulsorily required.
  onClick: () => void;
}

function Buttons({ children, color = "primary", onClick }: Props) {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        key={children}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Buttons;
