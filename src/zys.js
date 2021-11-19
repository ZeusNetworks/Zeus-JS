const fetch = require("node-fetch")


class Zeus {


  async getinfo(user) {

  if(!user) {

      throw new Error("Please Enter User Id")

    }

    let json = await fetch(`https://zeus.up.railway.app/user/${encodeURIComponent(user)}`)

    let zys = await json.json()

    return zys

  }

}



module.exports = Zeus
