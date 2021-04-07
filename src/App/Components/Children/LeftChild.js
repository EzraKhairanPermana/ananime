import { useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";

import { ModalContext } from "../../Context/ModalContext";
import { CurrentContext } from "../../Context/CurrentContext";
import { wpuImg, kunoleps, ArrowRight } from "../../Util/Image";

const ImbData = [
  {
    href: "https://www.youtube.com/channel/UCkXmLjEr95LVtGuIm3l2dPg",
    img: wpuImg,
  },
  { href: "https://www.instagram.com/kunoleps", img: kunoleps },
];

const ImageBrand = () => (
  <Row className="img-brand">
    {ImbData.map((e, i) => (
      <Col md="4" className="col-6 text-center" key={i}>
        <a href={e.href} rel="noopener noreferrer" target="_blank">
          <Image src={e.img} alt="WPU" className="rounded-circle" />
        </a>
      </Col>
    ))}
  </Row>
);

function Gendre() {
  const {
    message: { showModalMessage, setShowModalMessage },
  } = useContext(ModalContext);
  const {
    GenreData,
    current: { current, setCurrent },
  } = useContext(CurrentContext);

  return (
    <Row className="gendre">
      <Col md="12">
        <h2>Top Gendre</h2>
      </Col>
      {GenreData.map((e, i) => (
        <Col md="12" className="col-6" key={i}>
          <span
            className={`btn-gendre ${current === e ? "btn-gendre-active" : ""}`}
            onClick={() => setCurrent(e)}
          >
            {e}
          </span>
        </Col>
      ))}
      <Col className="col-12">
        <a
          href="/"
          className="btn-thx"
          onClick={(e) => {
            e.preventDefault();
            setShowModalMessage(!showModalMessage);
          }}
        >
          <Image src={ArrowRight} className="img-fluid" />
        </a>
      </Col>
    </Row>
  );
}

export { ImageBrand, Gendre };
