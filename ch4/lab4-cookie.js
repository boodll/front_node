const http = require('http')

http.createServer((req,res) => {
    console.log(req.url, req.headers.cookie)
    // 응답하면서.. response header에 쿠키 데이터 설정..
    //name=value 형식으로 몇개라도 전송 가능..
    //네트워크 통신에서 header, body 순서를 바꿀 수 없다..
    //아래의 두줄은 순서를 바꿀 수 없다
    res.writeHead(200, {'Set-Cookie':'mycookie = test'})
    res.end('Hello Cookie')
})
.listen(8080, ()=> {
    console.log('8080 서버 구동 ON')
})

//http://localhost:8080/