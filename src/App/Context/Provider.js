import SearchProvider from "./SearchContext";
import ModalProvider from "./ModalContext";

export default function Provider({ children }) {
  return (
    <SearchProvider>
      <ModalProvider>{children}</ModalProvider>
    </SearchProvider>
  );
}
