import Body from "./components /Body";
import SideBar from "./components /SideBar";

function App() {
  return (
      <section className="grid grid-cols-5 h-screen">
        <SideBar />
        <Body />
      </section>
  );
}

export default App;
