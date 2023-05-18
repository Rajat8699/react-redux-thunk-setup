import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from "../redux/actions/home";

const HomePage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homeActions.getListing());
    }, []);

    const { list } = useSelector((state) => state.home) || {};
    console.log(list, "data1111");

    return (
        <>
            {list.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <h5>{item.description}</h5>
                </div>
            ))}
        </>
    );
};

export default HomePage;
