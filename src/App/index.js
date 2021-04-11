import loadable from "@loadable/component";
import Provider from "./Context/Provider";
import Left from "./Components/Left";

const Middle = loadable(() => import("./Components/Middle"), {
  fallback: (
    <section className="web-middle">
      <h2 id="title-season">Anime Season {new Date().getFullYear()}</h2>
    </section>
  ),
});
const Right = loadable(() => import("./Components/Right"), {
  fallback: <section className="web-right" />,
});
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
