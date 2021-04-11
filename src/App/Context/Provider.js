import SearchProvider from "./SearchContext";
import ModalProvider from "./ModalContext";
import DetailProvider from "./DetailContext";
import CurrentProvider from "./CurrentContext";
import DataProvider from "./DataContext";

export default function Provider({ children }) {
  return (
    <ModalProvider>
      <CurrentProvider>
        <SearchProvider>
          <DataProvider>
            <DetailProvider>{children}</DetailProvider>
          </DataProvider>
        </SearchProvider>
      </CurrentProvider>
    </ModalProvider>
  );
}
