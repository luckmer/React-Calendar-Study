import { Switch, Route, useLocation } from "react-router-dom";
import { Routes } from "./routes/Index";
import { NavBar } from "./exports/Index";

const App = () => {
  const location = useLocation();

  return (
    <main>
      <NavBar />
      <Switch location={location}>
        {Routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </main>
  );
};

export default App;
