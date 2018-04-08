import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header, Footer, Sidebar } from "components";
import dashboardRoutes from "routes/dashboard.jsx";
import { style } from "typestyle";

const windowWidth = style({
    minWidth: "300px !important"
});

var ps;

class Dashboard extends React.Component
{
    componentDidMount()
    {
        if (navigator.platform.indexOf("Win") > -1)
        {
            ps = new PerfectScrollbar(this.refs.mainPanel);
        }
    }

    componentWillUnmount()
    {
        if (navigator.platform.indexOf("Win") > -1)
        {
            ps.destroy();
        }
    }

    render()
    {
        return (
            <div className={`${windowWidth} wrapper`}>
                <Sidebar {...this.props} routes={dashboardRoutes}/>
                <div className="main-panel" ref="mainPanel">
                    <Header {...this.props}/>
                    <Switch>
                        {
                            dashboardRoutes.map((prop, key) =>
                            {
                                if (prop.collapse)
                                {
                                    return prop.views.map((prop2, key2) =>
                                    {
                                        return (
                                            <Route path={prop2.path} component={prop2.component} key={key2}/>
                                        );
                                    });
                                }
                                if (prop.redirect)
                                {
                                    return (
                                        <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                    );
                                }
                                return (
                                    <Route path={prop.path} component={prop.component} key={key}/>
                                );
                            })
                        }
                    </Switch>
                    <Footer fluid/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
