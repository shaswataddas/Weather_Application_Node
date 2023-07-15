const http= require("http");
const fs = require("fs");
const requests = require("requests");

// Reading the Home.html file
const homeFile = fs.readFileSync("home.html", "utf-8");
// console.log(homeFile);

const convertKelvinToCelcious = (tempValue) => {
    return (tempValue - 273.15);
}
const replaceData = ( homeHtmlFile ,value) => {
    let temperature = homeHtmlFile.replace("{%currentTemp%}",convertKelvinToCelcious(value.main.temp).toFixed(2));
    temperature = temperature.replace("{minTemp}",convertKelvinToCelcious(value.main.temp_min).toFixed(2));
    temperature = temperature.replace("{maxTemp}",convertKelvinToCelcious(value.main.temp_max).toFixed(2));
    temperature = temperature.replace("{%locationCity%}",value.name);
    temperature = temperature.replace("{%locationCountry%}",value.sys.country);
    return temperature
}

//Createing the Server
const server = http.createServer((req,res) => {
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=0a8c45104042714e69cffc7cda4cc632")
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            // console.log(arrData[0].main.temp);
            const realTimeData = arrData
              .map((val) => replaceData(homeFile, val))
              .join("");
            // res.writeHead(200, {"Content-Type": "text/html"});
            res.write(realTimeData);
            console.log('The page has loaded successfully.');
            res.end();
            // console.log(realTimeData);
          })
        .on("end", (err) => {
        if (err) return console.log("connection closed due to err");
        });
    }
});

server.listen(4000, "127.0.0.1")