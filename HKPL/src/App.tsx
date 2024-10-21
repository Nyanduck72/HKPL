import "./App.css";
import { Switch, Route } from "wouter";
import Dashboard from "./pages/dashboard";
import AttemptLogger from "./pages/attemptLogger";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/newAttempt" component={AttemptLogger} />
      </Switch>
    </>
  );
}

export default App;
