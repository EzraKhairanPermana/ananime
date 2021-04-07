import SearchProvider from "./SearchContext";
import ModalProvider from "./ModalContext";
import CurrentContext from "./CurrentContext";

export default function Provider({ children }) {
  return (
    <SearchProvider>
      <ModalProvider>
        <CurrentContext>{children}</CurrentContext>
      </ModalProvider>
    </SearchProvider>
  );
}
