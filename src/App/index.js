import Provider from "./Context/Provider";
import { Left, Middle, Right, ModalMessage } from "./Components";

const App = () => (
  <Provider>
    <Left />
    <Middle />
    <Right />
    <ModalMessage />
  </Provider>
);

export default App;
