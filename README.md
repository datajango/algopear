# README.md - AlgoPear Coding Challenge

In the coding challenge you will use the given JSON files as data for a building a stock data page.  

Build a backend server that returns microservices using **NODE** that return the data in **TSLA_current.json** & **TSLA_news.json** with unit testing.

Build a **REACT** front end to display the requirements below:

BONUS:  
1. Build this in a mono repo using [Next.js](https://nextjs.org/)
1. Microservices using [Nest.js](https://docs.nestjs.com/microservices/basics).
1. Build end to end tests using [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Requirements

For this challenge we chose TSLA as our stock.  You will need to show a graph using the data from **TSLA_current.json** using the filteredAgg property.  The page will need to have the following:

1. Stock Header with ticker, name, close price, percentage change whether positive or negative, and dollar amount change from **TSLA_current.json**.  Note: the percentage change is caluculated as follows: ((close - previousClose) * .10)

2.  Show a line graph using [reCharts](https://recharts.org/en-US/) or any other graph tool you may know to show the aggregation data from **TSLA_current.json** using the filteredAgg property

3.  Show a stock table containing the open, high, low, prev close, vol, and avg vol that can be retrieved from **TSLA_current.json**.

4. Using the news **TSLA_news.json** display the current news in an uordered list below the stock table with image and the keywords displayed below the text

5.  Add unit testing

## Sample Image
![SampleCompletedProjectImage](SampleImage.png)


## Setup Git Hub

1. create a monorepo

```
echo "# algopear" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:datajango/algopear.git
git push -u origin main
```

## Front-end

1. Use npx to install Next.js

```
npx create-next-app@latest
```

1. Output 

```
  cd frontend
  npm run dev - Starts the development server.
  npm run build - Builds the app for production.
  npm start - Runs the built app in production mode.
```

1. Change Port Number 

- in package.json

```
"dev": "next dev -p 9000"
```

1. Open your browser and navigate to http://localhost:9000/.

## Backend

1. Install nest.js

```
npm i -g @nestjs/cli
```

1. Create project

```
nest new backend
```

1. Output

```
cd backend
npm run start
```

1. Open your browser and navigate to http://localhost:3000/.

##  Backend testing Using [Httpie](https://httpie.io/docs/cli)

1. Install Pytthon 3.10

1. I use Anaconda, its easy. See [How to create a Anaconda Python Environment](https://github.com/datajango/Home#how-to-create-a-anaconda-python-environment)

1. python -m pip install --upgrade pip wheel

1. python -m pip install httpie

1. Test Backend

```
http GET http://localhost:3000/
```

Which yeilds:

```
http GET http://localhost:3000/
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 12
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Apr 2022 20:16:50 GMT
ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"
Keep-Alive: timeout=5
X-Powered-By: Express

Hello World!
```

httpie proves the nest.js back-end is working correctly.

## Commit and Push Everything so Far

1. Create Development branch

```
git branch -M main
git checkout -b dev
```

1. Delete backend/.git

1. Commit everything so far

```
git add .
git commit -m "front-end, back-end, httpie"
git push origin dev
```

1. Create new branch off dev branch

```
git checkout dev
git checkout -b feature/add_current_rest_endpoint
```

1. use Nest.Js to create an Interface 

```
nest generate interface PageProps
```

1. use Nest.JS to add a service

```
nest generate service PageProps
```

1. Use Nest.JS to add a controller

```
cd backend
nest g controller current
```

1. Test with httpie

```
http GET http://localhost:3000/current/
```


1. Create new branch off dev branch

```
git checkout dev
git checkout -b feature/add_news_rest_endpoint
```

1. use Nest.JS to add a service

```
nest generate service News
```

1. Use Nest.JS to add a controller

```
cd backend
nest g controller News
```

1. Test with httpie

```
http GET http://localhost:3000/news/
```














