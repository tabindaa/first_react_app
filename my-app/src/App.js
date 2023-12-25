import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hello</h1>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
