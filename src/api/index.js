import axios from 'axios';

const url = 'https://covid-19.mathdro.id/api';
const daily_url = 'https://covid19.mathdro.id/api/daily';

export const fetchData = async (country) => {
    try{
        let d_url = url;
        if(country)
        {
            d_url = `${url}/countries/${country}`;
        }
        const { data:{ confirmed, recovered, deaths, lastUpdate } } = await axios.get(d_url);
        return { confirmed, recovered, deaths, lastUpdate }
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(daily_url);
        
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate
        }));

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data : { countries } } = await axios(`${url}/countries`);
        
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}