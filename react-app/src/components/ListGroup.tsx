import { useState } from "react"; //MouseEvent state is used for onClick funtion(mouse activity)

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

//using Props here, for function arguments.
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //   Hooks can be used as a form of varibale in React(Example of declaration is shown below). Inside the useState function we provide the value needs to be stored inside a variable.
  // these states are an array with two elements, one is to store the data and second is to update it inside the DOM.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/*  since using if else is not allowed inside html we can use ternary
      operator or something like true&&1 or false&&1 shown below */}
      <h1>{heading}</h1>

      {/* if no cities are found it will return the given text */}
      {items.length === 0 && <p> No cities found </p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
