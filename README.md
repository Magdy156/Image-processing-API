# Image processing API

## Overview

Api resizes and saves images to user specifications when visiting a URL.

## How to get started

1- clone the repo to your machine and run in your terminal "npm i" to get all the project dependencies.
2- to run the server run in your terminal "npm run start".
3- for testing using jasmine and building 'dist' folder, you can run "npm run test".
4- for formatting using prettier you can run "npm run format".
5- for linting using eslint you can run "npm run lint"

## How to use it

1- After running the server use this url in your favorite browser "http://localhost:3100/api".
2- so you use the API at that momment.
3- you have to pass the name of the image & its height & its width as query params after '/process'
such as "http://localhost:3100/api/process?name=fjord&width=1500&height=500"
4-finally you will get your specified image.

#### Warning: the image name must exist in 'images' folder & (height,width) must be +ve intger.
