const emailService = require('../services/email')
module.exports = {
  sendPhishingEmail: async (req, res) => {
    const body = req.body
    if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide an email address and email text',
      })
    }

    const { to, text } = body
    
    try{
      await emailService.sendPhishingEmail(to, text)
      return res.status(200)
    }
    catch(error){
      return res.status(500).json(
        error
      )
    }
  }
}