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
![DayTime]([https://myoctocat.com/assets/images/base-octocat.svg](https://drive.google.com/drive/folders/1uBwls_XH7VuxU3ImmJjRrX9wlMYrINy-)](https://drive.google.com/file/d/1la8bTCJ-HmgTwcd-pQ5w3nk5_x5tA5uK/view?usp=drive_link))
### During NightTime
![NightTime]([[https://myoctocat.com/assets/images/base-octocat.svg](https://drive.google.com/drive/folders/1uBwls_XH7VuxU3ImmJjRrX9wlMYrINy-)https://drive.google.com/drive/folders/1uBwls_XH7VuxU3ImmJjRrX9wlMYrINy-](https://drive.google.com/file/d/1M0sLCyVbstaT01Tw23zbredAyKd7P-er/view?usp=drive_link)https://drive.google.com/file/d/1M0sLCyVbstaT01Tw23zbredAyKd7P-er/view?usp=drive_link)
