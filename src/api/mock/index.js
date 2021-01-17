const fetch = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: mockData,
      rc: 200,
      rm: '',
    });
  }, time);
});

export default {
  getData() {
    return fetch({}, 200, 500);
  },
};
