import axios from 'axios';

const URL = 'https://bayut.p.rapidapi.com/properties/list';

const options = {
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    lang: 'en',
    sort: 'city-level-score',
  },
  headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
  }
};

export const getPropertiesData = async () => {
  try {
    const { data } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};