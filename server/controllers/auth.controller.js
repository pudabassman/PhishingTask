const User = require('../DB/models/user')

module.exports = {
  signin: async (req, res) => {
    let result;
    try{
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.username
      })
      if(user){
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        )
        if (!passwordIsValid) {
          result = res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          })
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        })

        result = res.status(200).json({
          id: user._id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        })
      }
      else{
        result = res.status(404).json({ message: "User Not found." })
      }
    }
    catch(error){
      result = res.status(500).json({ error })
    }
    return result
    
  }
}