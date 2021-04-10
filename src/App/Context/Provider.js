import SearchProvider from "./SearchContext";
import ModalProvider from "./ModalContext";
import DetailContext from "./DetailContext";
import CurrentContext from "./CurrentContext";

export default function Provider({ children }) {
  return (
    <SearchProvider>
      <ModalProvider>
        <CurrentContext>
          <DetailContext>{children}</DetailContext>
        </CurrentContext>
      </ModalProvider>
    </SearchProvider>
  );
}
