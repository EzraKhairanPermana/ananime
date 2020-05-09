import React, { Fragment, useState } from "react";
import { Left, Middle, Right, ModalMessage } from "./Components";

function App() {
  const [showModal, setShowModal] = useState(false);

  const setModal = boolean => setShowModal(boolean);

  return (
    <Fragment>
      <Left showModal={showModal} setModal={}/>
      <Middle />
      <Right />
      <ModalMessage showModal={showModal} setModal={setModal}/>
    </Fragment>
  );
}

export default App;
