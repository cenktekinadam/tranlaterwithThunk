import axios from "axios";

export default axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'adc474c862mshcb7beaa533b8fbfp132ab8jsn1c4ffb15ba06',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    }
})