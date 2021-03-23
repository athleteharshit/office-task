import { Switch, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./App.css";
import SignIn from "./components/users/SignIn";
import ResetPassword from "./components/users/ResetPassword";
import ForgotPassword from "./components/users/ForgotPassword";
import MyWordrobe from "./components/pages/MyWordrobe";
import HomePage from "./components/pages/HomePage";
import Home from "./components/material/Home";
import HomeLatest from "./components/material/HomeLatest";
import DragAndDrop from "./components/reactDragDrop/DragAndDrop";



function App() {
  return (
    <CookiesProvider>
      <div className="app">
        <Switch>
          <Route exact path="/dragDrop" component={DragAndDrop} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/cropper" component={MyWordrobe} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/" component={HomeLatest} />
        </Switch>
      </div>
    </CookiesProvider>
  );
}

export default App;
