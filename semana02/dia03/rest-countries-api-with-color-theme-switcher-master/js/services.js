


const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/independent?fields=name,population,region,capital,languages,currencies,flags,timezones";
    try{
        const response = await fetch(url); // retorna una promesa
        if(!response.ok) throw {status: response.status, statusText: response.statusText};
        return await response.json();;
    }catch(error){ 
        console.log(error); 
    }
};


export const getByRegion = async (regionName) =>{
    const url = `https://restcountries.com/v3.1/region/${regionName}`;
    try{
        const response = await fetch(url); // retorna una promesa
        if(!response.ok) throw {status: response.status, statusText: response.statusText};
        return await response.json();;
    }catch(error){ 
        console.log(error); 
    }

}



export default fetchCountries;