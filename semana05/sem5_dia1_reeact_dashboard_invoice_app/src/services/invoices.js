const API_URL = 'https://668348414102471fa4c9a487.mockapi.io/api/v1';

export const fetchInvoices = async () => {
    try{
        const url = `${API_URL}/invoices`;
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }catch(error){
        console.log(error);
    }
}


export const getInvoice = async (id) => {
    try{
        const url = `${API_URL}/invoices/${id}`;
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }catch(error){
        console.log(error);
    }
}

export const createInvoice = async (form) => {
    try{
        const url = `${API_URL}/invoices/`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        }

        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error(`error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }catch(error){
        console.log(error);
    }
}

export const updateInvoiceStatus = async (id, newStatus) => {
    try{
        const url = `${API_URL}/invoices/${id}`;
        const options = {
            method: 'PUT', // put === patch (solo para mockapi)
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        }

        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error(`error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    }catch(error){
        console.log(error);
    }
}

export const deleteInvoice = async (id) => {
    try {
        const url = `${API_URL}/invoices/${id}`
    
        const options = {
          method: 'DELETE'
        }
    
        const response = await fetch(url, options)
    
        return response.json()
    } catch(error) {
        console.log(error)
      }
}