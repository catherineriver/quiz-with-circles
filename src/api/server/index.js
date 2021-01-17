import axios from 'axios';

export default {
  getData() {
    return axios
      .post('/special/remote-or-not/data', {}, {
        headers: {
          'X-This-Is-CSRF': 'THIS IS SPARTA!',
        },
      })
      .then((response) => response.data);
  },
};
