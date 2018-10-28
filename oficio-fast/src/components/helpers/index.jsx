import { firebaseAuth } from '../../data/'
import { firebaseApp } from '../../data/'


const auth = (email, password, user) => (
  firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
      .then(res => {
        createUserInDB (user)
      })
      .catch(err => console.log(err.message)) 
)

const createUserInDB = (user) => {
  let usersRef = firebaseApp.database().ref().child('users')
  usersRef.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    school: user.school
  })
  console(usersRef)
}
const login = (email, password) => firebaseAuth().signInWithEmailAndPassword(email, password)

const logout = () => firebaseAuth().signOut()

const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email)


export {
  auth,
  login,
  logout,
  resetPassword,
}
