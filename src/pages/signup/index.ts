import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

const signUp = async () => {
  try {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e)
    }
  }
}