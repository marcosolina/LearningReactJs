import React from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const UserDisplay = () => {
    const user = useSelector((state: AppState) => state.user);

    if(user){
        console.log("user", user);

        return (
            <React.Fragment>
                <div>
                    <label>Username:</label>
                    &nbsp;{user.username}
                </div>
                <div>
                    <label>Email:</label>
                    &nbsp;{user.email}
                </div>
                <div>
                    <label>City:</label>
                    &nbsp;{user.city}
                </div>
            </React.Fragment>
        );
    } else {
        return null;
    }
};

export default UserDisplay;