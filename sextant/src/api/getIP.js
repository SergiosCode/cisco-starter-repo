const getIPV6 = () => {
  fetch("https://api64.ipify.org?format=json").then((res) => {
    res.json().then((data) => {
      console.log(data.ip);
      return `${data.ip}`;
    });
  });
};

const getIPV4 = () => {
  fetch("https://api.ipify.org?format=json").then((res) => {
    res.json().then((data) => {
      console.log(data.ip);
      return `${data.ip}`;
    });
  });
};

getIPV4();
getIPV6();

export { getIPV4, getIPV6 };
