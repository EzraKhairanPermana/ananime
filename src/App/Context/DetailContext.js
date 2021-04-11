import { createContext, useState, useCallback, useMemo } from "react";
import Axios from "axios";

export const DetailContext = createContext(false);

let cancelRequest = undefined;

export default function DetailProvider(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fire = useCallback(async (id) => {
    setShowModal(true);
    setLoading(true);
    cancelRequest = Axios.CancelToken.source();
    const data = await Axios.get(`https://api.jikan.moe/v3/anime/${id}`, {
      cancelToken: cancelRequest.token,
    })
      .then((res) => res.data)
      .then((data) => {
        let newData = { ...data };

        if (data.episodes == null) newData.episodes = "unknown";
        if (data.score == null) newData.score = "unknown";

        return newData;
      });

    setLoading(false);
    setData(data);
  }, []);

  const hideModal = useCallback(() => {
    setShowModal(false);
    setTimeout(() => void setData({}), 500);

    if (loading) {
      setLoading(false);
      if (cancelRequest) cancelRequest.cancel();
    } else {
      if (cancelRequest) cancelRequest = undefined;
    }
  }, [loading]);

  const providerValue = useMemo(
    () => ({
      showModal,
      hideModal,
      loading,
      data,
      fire,
    }),
    [showModal, data, hideModal, loading, fire]
  );

  return <DetailContext.Provider value={providerValue} {...props} />;
}
