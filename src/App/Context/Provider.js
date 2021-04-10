import SearchProvider from "./SearchContext";
import ModalProvider from "./ModalContext";
import DetailProvider from "./DetailContext";
import CurrentProvider from "./CurrentContext";
import DataProvider from "./DataContext";

export default function Provider({ children }) {
  return (
    <SearchProvider>
      <ModalProvider>
        <CurrentProvider>
          <DetailProvider>
            <DataProvider>{children}</DataProvider>
          </DetailProvider>
        </CurrentProvider>
      </ModalProvider>
    </SearchProvider>
  );
}
