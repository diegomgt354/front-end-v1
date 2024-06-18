import fetchCountries, { getByRegion } from "./services.js"
import { renderCountries } from "./utils.js"

let countryData = [];

const searchInput = document.querySelector(".app__input");
const filterSelect = document.querySelector(".app__filter");

// al agregar un evento al input, se ejecuta la función de filtrado
searchInput.addEventListener("input", event => {
    // console.log({event});

    const searchValue = event.target.value.toLowerCase();

    // filtrar los paises por su nombre
    const loweredName = countryData.filter(country => country.name.common.toLowerCase().includes(searchValue));
    
    // filtrar los paises por su capital
    let capitals = [];
    countryData.forEach(country => {
        for (let i = 0; i < country.capital.length; i++) {
            if (country.capital[i].toLowerCase().includes(searchValue)) {
                capitals.push(country);
            }
        }
    });

    renderCountries([...capitals, ...loweredName]);
    
});


filterSelect.addEventListener("input", async event => {
    
    const filterValue = event.target.value;

    const countries = await getByRegion(filterValue);

    console.log({countries});

    renderCountries(countries);

    
});


// Llamada a la API para obtener los datos
fetchCountries().then(countries => {

    countryData = countries;

    renderCountries(countryData);

});

