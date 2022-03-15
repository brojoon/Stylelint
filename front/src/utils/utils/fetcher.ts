import axios from 'axios';

const fetcher = (url: string): any =>
  axios
    .get(url, {
      withCredentials: true,
      // headers: {
      // 	Authorization: `Bearer ${getToken()}`,
      // }
    })
    .then((response) => response.data)
    .catch((error) => {
      return false;
    });

export default fetcher;
