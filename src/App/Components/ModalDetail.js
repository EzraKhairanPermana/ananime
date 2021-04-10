import { Modal, Row, Col, Image } from "react-bootstrap";
import { wpuImg, kunoleps } from "../Util/Image";
import { useContext } from "react";

import { DetailContext } from "../Context/DetailContext";
const { Header, Body } = Modal;

function ModalMessage() {
  const { showModal, setShowModal } = useContext(ModalDetail);

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="sm">
      <Header closeButton />
      <Body></Body>
    </Modal>
  );
}

export default ModalMessage;
