import { useState } from "react";
import Modal from "./Components/Modal";

function App() {
  const [Isopen, setIsopen] = useState(true);

  return (
    <div className="App">
      <Modal
        ModalStatus={Isopen}
        setModalStatus={setIsopen}
        ModalChildren="heyy"
      ></Modal>
    </div>
  );
}

export default App;
