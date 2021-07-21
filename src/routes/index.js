import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Sucess from "../pages/Sucess";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/sucess/:nome'>
                <Sucess />
            </Route>
        </Switch>
    )
}

export default Routes;