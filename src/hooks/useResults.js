import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const DEFAULT_SEARCH_TERM = 'pasta';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'Munich'
        }
      });
      setErrorMessage('');
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(() => {
    searchApi(DEFAULT_SEARCH_TERM)
  }, [])

  return [searchApi, results, errorMessage];
}
