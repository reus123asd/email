const Sib = require('sib-api-v3-sdk')

require('dotenv').config();

const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()

const sender = {
    email:'mallquiowen@gmail.com',
}

const receivers = [
    {
        email:'pelaoquispe147@gmail.com'
    }
]

tranEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: 'hola owen',
    textContent:`Cules Coding will teach you how to become a developer`,
}).then(console.log).catch(console.log)