var http = require("http");

http.get({ host: "https://api64.ipify.org", port: 3000, path: "/" }, function (resp) {
  resp.on("data", function (ip) {
    console.log("My public IP address is: " + ip);
  });
});

export default IpFetch;
