import "./App.css";
import { Route, Switch } from "wouter";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
