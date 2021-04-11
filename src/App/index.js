import Provider from "./Context/Provider";
import { Left, Middle, Right, ModalMessage, ModalDetail } from "./Components";

const App = () => (
  <Provider>
    <Left />
    <Middle />
    <Right />
    <ModalMessage />
    <ModalDetail />
  </Provider>
);

export default App;
