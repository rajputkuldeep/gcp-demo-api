'use strict'

const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.get('/', (_, res) => {
  res.send('<html  lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet" /><title>Server Response</title><style>html,body {      margin: 0;padding: 0;height: 100%;font-family: "Baloo 2", cursive;display: flex;justify-content: center;align-items: center;color: white;background-color: #fbb435;  }.wrapper {background: url("https://c4.wallpaperflare.com/wallpaper/292/232/1005/4k-3d-triangles-dark-wallpaper-preview.jpg")        no-repeat;      width: 800px;      height: 400px;      background-size: cover;      position: relative;      box-shadow: 4px 9px 9px 1px #a76e09;    }    .inner-wrapper {      position: absolute;      top: 50%;      left: 50%;      transform: translate(-50%, -50%);      background-color: #112c41de;      border: 1px solid #2a3cad;      padding: 20px;      width: 250px;      height: 250px;      overflow: hidden;      position: relative;    }    p {      font-size: 20px;      margin-top: 6rem;    }        .inner-wrapper span {      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      display: block;      box-sizing: border-box;    }        .inner-wrapper .info {      position: absolute;      top: 15px;      left: 15px;      right: 15px;      bottom: 15px;      border: 1px solid #bd770d;      padding: 20px;      text-align: center;      box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);      background: white;      color: black;    }        span:nth-child(1) {      transform: rotate(0deg);    }        span:nth-child(2) {      transform: rotate(90deg);    }        span:nth-child(3) {      transform: rotate(180deg);    }        span:nth-child(4) {      transform: rotate(270deg);    }        span:after {     content: "";      position: absolute;      width: 100%;      height: 4px;      background: #50dfdb;      animation: animate 4s linear infinite;    }        @keyframes animate {      0% {        transform: scaleX(0);        transform-origin: left;      }      50% {        transform: scaleX(1);        transform-origin: left;      }      /* 51.5% {              transform: scaleX(1);              transform-origin: right;            } */          100% {        transform: scaleX(0);        transform-origin: right;      }    }          </style>    </head>        <body>      <div class="wrapper">        <div class="inner-wrapper">          <span></span>          <span></span>          <span></span>          <span></span>          <div class="info">            <h2>Server Response 🙂</h2>            <p>This page was rendered directly from the SERVER</p>          </div>        </div>      </div>    </body>        </html>')
})

app.listen(PORT, HOST, () => {
  console.log(` Running on http://${HOST}:${PORT}`)
})
