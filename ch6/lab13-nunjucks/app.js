const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
app.set('port', process.env.PORT || 3000)

app.set('view engin', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true,
})




app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트로 대기중')
})