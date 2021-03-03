import { Switch, Route, useLocation } from "react-router-dom";
import { Routes } from "./routes/Index";

const App = () => {
    const location = useLocation();

    return (
        <Switch location={location}>
            {Routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />
            ))}
        </Switch>
    );
};

export default App;
