import { useContext, useCallback, memo } from "react";
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

const ImageBrand = memo(() => (
  <Row className="img-brand">
    {ImbData.map((e, i) => (
      <Col md="4" className="col-6 text-center" key={i}>
        <a href={e.href} rel="noopener noreferrer" target="_blank">
          <Image src={e.img} alt="WPU" className="rounded-circle" />
        </a>
      </Col>
    ))}
  </Row>
));

const Gendre = memo(() => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const {
    GenreData,
    current: { current, setCurrent },
  } = useContext(CurrentContext);

  return (
    <Row className="gendre">
      <Title />
      <GendreLists
        GenreData={GenreData}
        setCurrent={setCurrent}
        current={current}
      />
      <ButtonThx showModal={showModal} setShowModal={setShowModal} />
    </Row>
  );
});

const GendreLists = memo(
  ({ GenreData, setCurrent, current }) =>
    GenreData.map((e, i) => (
      <Col md="12" className="col-6" key={i}>
        <span
          className={`btn-gendre ${current === e ? "btn-gendre-active" : ""}`}
          onClick={() => setCurrent(e)}
        >
          {e}
        </span>
      </Col>
    )),
  (prevProps, nextProps) => prevProps.current === nextProps.current
);

const Title = memo(() => (
  <Col md="12">
    <h2>Top Gendre</h2>
  </Col>
));

const ButtonThx = memo(
  ({ setShowModal, showModal }) => (
    <Col className="col-12">
      <a
        href="/"
        className="btn-thx"
        onClick={useCallback(
          (e) => {
            e.preventDefault();
            setShowModal(!showModal);
          },
          [setShowModal, showModal]
        )}
      >
        <ImageArrow />
      </a>
    </Col>
  ),
  (prevProps, nextProps) => prevProps.showModal === nextProps.showModal
);

const ImageArrow = memo(() => (
  <Image src={ArrowRight} className="img-fluid" alt="Terimakasih :)" />
));

export { ImageBrand, Gendre };
