import { createContext, useState, useMemo } from "react";

export const ModalContext = createContext(false);

export default function ModalProvider(props) {
  const [showModal, setShowModal] = useState(false);

  const providerValue = useMemo(() => ({ showModal, setShowModal }), [
    showModal,
    setShowModal,
  ]);

  return <ModalContext.Provider value={providerValue} {...props} />;
}
