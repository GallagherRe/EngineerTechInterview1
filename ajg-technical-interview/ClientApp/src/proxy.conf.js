const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:32607", 
    secure: false
  }
]

module.exports = PROXY_CONFIG;
