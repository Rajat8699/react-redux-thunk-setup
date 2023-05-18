import axios from "axios";

//this is a basic setup so I've not implemented interceptors, but you can setup axios the way you like

export const getListingApi = () => {
    return axios.get(`https://dummyjson.com/products`);
};