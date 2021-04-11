import loadable from "@loadable/component";
import Provider from "./Context/Provider";
import Left from "./Components/Left";

const Middle = loadable(() => import("./Components/Middle"));
const Right = loadable(() => import("./Components/Right"));
const ModalMessage = loadable(() => import("./Components/ModalMessage"));
const ModalDetail = loadable(() => import("./Components/ModalDetail"));

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
