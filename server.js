const path = require('path')
const express = require('express')


const app = express()

    app.use(require('cors')())
    app.use(express.json())
   

    app.post('/send',(req, res, next)=>{
        const snome = req.body.snome
        const email = req.body.email
        const mensagem = req.body.mensagem
        require('./src/services/mailService')(snome,email, mensagem)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))

    })

    app.use(express.static(path.join(__dirname, 'build')))
   
app.listen(3000, ()=>{
    console.log('server satart')
})