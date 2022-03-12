const Email = require('../DB/models/email')
const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8082/api/'

const errorHandler = ({error, messages = [], res}) => {
  let result

  if(error) {
    result = res.status(400).json({ success: false, error: err })
  }
  if (!messages.length) {
    result = res
        .status(404)
        .json({ success: false, error: `No messages found` })
  }

  return result
}

module.exports = {
  //Path should be of form: someurl/id where id is the email id
  emailClicked: async (_, res) => {
    const { id: emailId } = req.params
    if(emailId){
      const email = await Email.findById(emailId)
      email.clicked = true
      email.save().catch(error => console.log(error))
    }
  },

  getSentEmailStatuses: async (_, res) => {
    let result;
    try{
      const emails = await Email.find({}).sort({ createdAt:-1 })
      result = res.status(200).json({ emails })
    }
    catch(error){
      result = errorHandler({error, res})
    }
    return result
  },

  sendPhishingEmail: async (req, res) => {
    let result;
    const body = req.body
    if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide an email address and email text',
      })
    }

    const { to, text } = body

    try{
      result = await axios.post('sendPhishingEmail', { to, text })
    }
    catch(error){
      result = errorHandler({error, res})
    }

    return result
  }
}