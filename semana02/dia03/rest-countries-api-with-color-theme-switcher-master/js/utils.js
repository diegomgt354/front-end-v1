
const formatNumber = number => new Intl.NumberFormat('de-DE', { currency: 'EUR' }).format(number);


export const renderCountries = (countries=[]) => {

    const countryListElement = document.querySelector(".app__list");
    let countryList = "";

    countries.forEach(country=>{
        countryList +=  `
            <article class="country">
                <img class="country__flag" src="${country.flags.png}" />

                <div class="country__wrapper">
                    <h2>${country.name.common}</h2>
                    <div class="country__description">
                        <strong>Population:</strong> 
                        ${formatNumber(country.population)}
                    </div>
                    <div class="country__description">
                        <strong>Region:</strong> ${country.region}
                    </div>
                    <div class="country__description">
                        <strong>Capital:</strong> ${country.capital.join(', ')}
                    </div>
                </div>
            </article>
    `;

    });

    countryListElement.innerHTML = countryList;
    
}

