// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  // let items = ["Kiel", "Hamburg", "Bremen", "Berlin", "Frankfurt"];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectedItem={handleSelectedItem}
  //     />
  //   </div>
  // );
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert!</Alert>
      )}
      <Buttons color="danger" onClick={() => setAlertVisibility(true)}>
        My buttons
      </Buttons>
    </>
  );
}

export default App;
