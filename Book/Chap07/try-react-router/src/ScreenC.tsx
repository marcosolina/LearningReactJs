import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

interface ScreenCProps {
    message: string;
}

const ScreenC: FC<ScreenCProps> = ({ message }) => {
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 10000);
    });

    return (
        <div>
            <div>{"Your ID is: " + params.userid}</div>
            <div>{message}</div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default ScreenC;