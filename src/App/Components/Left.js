import React from "react";

import { ImageBrand, Gendre } from "./Children/LeftChild";

function Left({ showModal, setModal }) {
  return (
    <section className="web-left">
      <ImageBrand />
      <Gendre showModal={showModal} setModal={setModal} />
    </section>
  );
}

export default Left;
