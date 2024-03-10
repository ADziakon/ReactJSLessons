import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client'
import App from './App.js'
// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")


// const Header = () => {
//   return (
//     <header>Шапка сайта</header>
//   )
// }

//const elements = ()

//const app = document.getElementById("app")
//ReactDOM.render(elements, app) // немного устаревает и уже стоит использовать новый вариант

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)