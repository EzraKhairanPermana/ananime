import SearchProvider from "./SearchContext";
import ModalProvider from "./ModalContext";
import DetailProvider from "./DetailContext";
import CurrentProvider from "./CurrentContext";
import DataProvider from "./DataContext";

export default function Provider({ children }) {
  return (
    <ModalProvider>
      <DetailProvider>
        <CurrentProvider>
          <DataProvider>
            <SearchProvider>{children}</SearchProvider>
          </DataProvider>
        </CurrentProvider>
      </DetailProvider>
    </ModalProvider>
  );
}
