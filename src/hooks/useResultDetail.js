import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default (id) => {
  const [resultDetail, setResultDetail] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchResultDetailApi = async (businessId) => {
    try {
      const response = await yelp.get(`/${businessId}`);
      setErrorMessage('');
      setResultDetail(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(() => {
    searchResultDetailApi(id)
  }, [])

  return [resultDetail, errorMessage];
}
