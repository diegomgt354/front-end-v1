import axios from 'axios';

const url = 'https://dummyjson.com/products';
export const fetchProductsWithAPIFetch = async () => {
    // const response = await fetch(url);
    // return response.json();
    const response = fetch(url);
    return (await response).json();
}

export const fetchProductsWithAPIAxios = async () => {
    // const response = await axios.get(url);
    // return response.data;
    const response = axios.get(url);
    return (await response).data;
}

