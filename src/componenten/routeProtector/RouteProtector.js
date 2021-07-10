
import {Route, Redirect} from "react-router-dom"
import {useContext} from "react";
import {AuthContext} from "../Context/AuthContextProvider";

function ProtectedRoute({component: Component, ...rest}) {
    const {isTokenValid} = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                if (isTokenValid()) {
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

export default ProtectedRoute;