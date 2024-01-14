const fs = require('fs').promises
const path = require('path')
const express = require('express')
const morgan = require('morgan')

const user = {}

app.use((req, res, next)=>{
    console.log('모든 요청 전부 실행')
    next()
})
