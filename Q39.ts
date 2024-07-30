function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let cityName: string = "Lahore";
let countryName: string = "Pakistan";

let result: string = city_country(cityName, countryName);
console.log(result); 
