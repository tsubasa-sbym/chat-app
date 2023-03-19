import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

// const signUp = async () => {
//   try {
//     const auth = getAuth()
//     await createUserWithEmailAndPassword(auth, email, password)
//   } catch (e) {
//     if (e instanceof FirebaseError) {
//       console.log(e)
//     }
//   }
// }

export const Page = () => {
  return (
    <Container py={14}>
      <Heading>サインアップ</Heading>
      <chakra.form>
        <Spacer height={8} aria-hidden />
        <Grid gap={4}>
          <Box display={'contents'}>
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input type={'email'} />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード</FormLabel>
              <Input type={'password'} />
            </FormControl>
          </Box>
        </Grid>
        <Spacer height={4} aria-hidden />
        <Center>
          <Button type={'submit'}>アカウントを作成</Button>
        </Center>
      </chakra.form>
    </Container>
  )
}

export default Page