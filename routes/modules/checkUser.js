const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  },
  {
    firstName: 'Test',
    email: 'test@test',
    password: '123'
  }
]

function checkUser(email, password) {
  if (email.length === 0 || password.length === 0) {
    return "msgNull"
  }

  const emails = users.map( obj => obj.email)
  const index = emails.findIndex(element => element === email)
  if (index === -1) {
    return "msgFalse"
  }
  if (users[index].password === password) {
    // return users[index].firstName
    // console.log("user", users[index])
    return users[index]
  } else {
    return "msgFalse"
  }
}

module.exports = checkUser