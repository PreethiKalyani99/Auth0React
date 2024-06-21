import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

export function MainNav(){
    const { user, isLoading } = useAuth0()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav mr-auto">
                        {!isLoading && user && (
                        <>
                            <NavLink className="nav-item nav-link" to="/login/home">
                            Home
                            </NavLink><br/>
                            <NavLink className="nav-item nav-link" to="/login/cart">
                            Cart
                            </NavLink><br/>
                            <NavLink className="nav-item nav-link" to="/login/product">
                            Product
                            </NavLink><br/>
                            <NavLink className="nav-item nav-link" to="/login/user-profile">
                            Profile
                            </NavLink><br/>
                            <NavLink className="nav-item nav-link" to="/login/your-orders">
                            Orders
                            </NavLink>
                        </>
                        )}
                    </div>
                    <div className="navbar-nav ml-auto">
                        {!isLoading && user && <Logout />}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}