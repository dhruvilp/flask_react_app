import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Name from "./pages/Name";
import TableApi from "./pages/TableApi";
import TableStyle from "./pages/TableStyle";
import TableResponsive from "./pages/TableResponsive";
import TableButtons from "./pages/TableButtons";

class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/name" component={Name} />
                <Route exact path="/tablestyle" component={TableStyle} />
                <Route exact path="/tableapi" component={TableApi} />
                <Route exact path="/tableresponsive" component={TableResponsive} />
                <Route exact path="/tablebuttons" component={TableButtons} />
                <Route 
                    render={function () {
                        return <h1>Not Found!</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;