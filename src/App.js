import "./App.css";
import Login from "./app/components/authScreens/Login";

import Header from "./app/components/Header";
import HomeScreen from "./app/components/HomeScreen";

function App() {
  return (
    <div>
      <Header />
      {/* <HomeScreen /> */}
      <Login />
    </div>
  );
}

export default App;
