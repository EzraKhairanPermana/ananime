import { createContext, useState, useMemo } from "react";

export const DetailContext = createContext(false);

export default function DetailProvider(props) {
  const [showModal, setShowModal] = useState(false);

  const providerValue = useMemo(
    () => ({
      showModal,
      setShowModal,
    }),
    [showModal, setShowModal]
  );

  return <DetailContext.Provider value={providerValue} {...props} />;
}
