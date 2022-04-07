const nodemailer = require("nodemailer")
module.exports = (email, snome, mensagem) =>{


    const smtp = nodemailer.createTransport({
        host:'smtp.titan.email',
        port: 465,
        secure: false,
        auth:{
            user: 'xxx',
            pass: 'xxx'
        }
    })
    
    const mail = {
        from: 'meuemail@meuemail.com',
        to: email,
        subject:`E-mail enviado por ${snome}`,
        text: mensagem
    }
    return new Promise((resolve, reject)=>{
        smtp.sendMail(mail)
        .then(response =>{
            smtp.close()
            return resolve(response)
        })
        .catch(error =>{
            smtp.close()
            return reject(error)
        })
    })


}