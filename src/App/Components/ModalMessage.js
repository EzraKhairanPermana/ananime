import { Modal, Row, Col, Image } from "react-bootstrap";
import { wpuImg, kunoleps } from "../Util/Image";
import { useContext } from "react";

import { ModalContext } from "../Context/ModalContext";
const { Header, Body } = Modal;

const Data = [
  {
    src: wpuImg,
    text: ["Web Programming", "Unpas"],
    href: "https://www.youtube.com/channel/UCkXmLjEr95LVtGuIm3l2dPg",
    alt: "WPU",
  },
  {
    src: kunoleps,
    text: ["Ryan Azhari", "Kunoleps"],
    href: "https://www.instagram.com/kunoleps",
    alt: "Kunoleps",
  },
];

function ModalMessage() {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="sm">
      <Header closeButton />
      <Body>
        <Row className="overflow">
          {Data.map((e, i) => (
            <Col className="col-6 text-center" key={i}>
              <Image className="img-fluid" src={e.src} alt={e.alt} />
              <p>
                {e.text[0]} <br />
                {e.text[1]}
              </p>
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-visit"
              >
                Visit
              </a>
            </Col>
          ))}
          <div className="message">
            <p>Terima kasih buat kalian yang sudah berkunjung : )</p>
            <p>
              Dan tentunya untuk pak dhika semoga sehat selalu dan tetap jadi
              dosen online buat semua <br />; )
            </p>
          </div>
        </Row>
      </Body>
    </Modal>
  );
}

export default ModalMessage;
