import { createContext, useState, useMemo } from "react";

export const ModalContext = createContext(false);

export default function ModalProvider(props) {
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  const providerValue = useMemo(
    () => ({
      message: { showModalMessage, setShowModalMessage },
      detail: { showModalDetail, setShowModalDetail },
    }),
    [showModalMessage, setShowModalMessage, showModalDetail, setShowModalDetail]
  );

  return <ModalContext.Provider value={providerValue} {...props} />;
}
