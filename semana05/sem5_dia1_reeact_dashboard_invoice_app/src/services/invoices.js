const PI_URL = 'https://668348414102471fa4c9a487.mockapi.io/api/v1';

export const fetchInvoices = async () => {
    try{
        const url = `${PI_URL}/invoices`;
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }catch(error){
        console.log(error);
    }
}


export const getInvoice = async (id) => {
    try{
        const url = `${PI_URL}/invoices/${id}`;
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }catch(error){
        console.log(error);
    }
}
