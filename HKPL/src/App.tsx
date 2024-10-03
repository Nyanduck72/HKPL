import "./App.css";
import { Switch, Route } from "wouter";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
