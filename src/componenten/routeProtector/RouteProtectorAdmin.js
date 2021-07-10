import {useContext} from "react";
import {AuthContext} from "../Context/AuthContextProvider";
import {Redirect, Route} from "react-router-dom";

function ProtectedRouteAdmin({component: Component, ...rest}) {
    const {isTokenValid, user} = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                if (isTokenValid()) {
                    // if (user.authority === "ADMIN") {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default ProtectedRouteAdmin;