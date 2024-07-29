const express = require('express') //express module 가져옴.
const app = express() // express app 생성
const port = 3000 //서버 port

app.get('/', (req, res) => res.send('Hello World!')) //루트 디렉토리에 오면 Hello World 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //port 5000 실행