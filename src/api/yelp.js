import axios from 'axios';
import { YELP_BASE_BUSINESS_URL, YELP_API_KEY } from '@env';

export default axios.create({
  baseURL: YELP_BASE_BUSINESS_URL,
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`
  }
});
