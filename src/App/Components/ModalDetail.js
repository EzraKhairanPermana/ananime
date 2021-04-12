import { Modal, Row, Col, Image, Button } from "react-bootstrap";
import { LoadGif } from "../Util/Image";
import { useContext } from "react";

import { DetailContext } from "../Context/DetailContext";
const { Header, Body, Footer } = Modal;

function ModalDetail() {
  const { showModal, hideModal, data, loading } = useContext(DetailContext);

  return (
    <Modal show={showModal} onHide={hideModal} size="lg">
      <Header closeButton />
      <Body>
        {loading && (
          <Col className="col-12 text-center mt-5 mb-5">
            <img src={LoadGif} alt="Load" />
          </Col>
        )}
        {!loading && Object.keys(data).length > 0 && (
          <Row className="detail-anime">
            <Col md={4} className="text-center">
              <Image
                src={data.image_url.replace("jpg", "webp")}
                alt={`${data.title} | Banner`}
                className="img-fluid"
              />
            </Col>
            <Col md={8}>
              <h3 className="title-detail">{data.title}</h3>
              <p className="durasi">
                Status : <span>{data.status}</span>
              </p>
              <p className="durasi">
                Duration : <span>{data.duration}</span>
              </p>
              <Row className="mt-2 mb-2">
                <div className="col-md-3 col-12">
                  <p className="score">
                    Score : <span>{data.score}</span>
                  </p>
                </div>
                <div className="col-md-4 col-12">
                  <p className="score">
                    Type : <span>{data.type}</span>{" "}
                    <span>{data.episodes} eps</span>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <p className="score">
                    Members : <span>{data.members}</span>
                  </p>
                </div>
              </Row>
              <p className="score">
                Popularity : <span>{data.popularity}</span>
              </p>
              {data.studios.length > 0 && (
                <p className="score">
                  Studio : <span>{data.studios[0].name}</span>
                </p>
              )}
              <div className="synopsis">
                <p className="score">Synopsis</p>
                <span>{data.synopsis}</span>
              </div>
            </Col>
            {data.trailer_url && (
              <Col className="col-12">
                <Row className="preview">
                  <Col md={12} className="trailer text-center">
                    <h4>Trailer</h4>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        title={`${data.title} | Trailer`}
                        className="embed-responsive-item"
                        src={data.trailer_url}
                        allowFullScreen
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        )}
      </Body>
      <Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
      </Footer>
    </Modal>
  );
}

export default ModalDetail;
