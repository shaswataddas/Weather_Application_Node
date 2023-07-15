# Weather Application Node

## About
This is a Node application which give the information about the Current weather of Kolkata. 


## API Callout
Here we use a third party callout which helps to get the current weather data to the viewer. For this application we use [Weather API](https://openweathermap.org/api).
You can follow the Documentation for more information about the API.

## API Testing
Before starting the development we can test the API using the postman. for that we need to login in OpenWeather first, then we need to generate the API key to make the callout.
After registering you as a user and generate the API key, you need to wait for few hours, because few hours is required to activate your API key.
After activating the API Key, you simply make callout useing the following URLs - 

1. https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
2. https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

When you hit the URL after replacing the API Key,city Name etc with the proper value then you should get a proper response from the API. If not, check the status code of the response, and try to fix the issue.


## Required Packages
To make the Callout we use 'requests','http' and 'fs' Package. requests and http helps to create the server, make the callout, and get the response from the API.
And fs package is use to read the data from the response and parse it.

## Overview
### During DayTime
<img src="https://github.com/shaswataddas/Weather_Application_Node/blob/main/Screenshot%202023-07-15%20at%2012.17.32%20PM.png"/>

### During NightTime
<img src="https://github.com/shaswataddas/Weather_Application_Node/blob/main/Screenshot%202023-07-15%20at%2012.17.57%20PM.png"/>
