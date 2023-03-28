import { chakra, Container, Flex } from '@chakra-ui/react'
import { Navigate } from '@src/component/Navigate/Navigate'

export const Footer = () => {
  return (
    <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
      <Container maxW={'container.lg'}>
        <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
          <Navigate href={(path) => path.$url()}>
            トップページ
          </Navigate>
          <Navigate href={(path) => path.signin.$url()}>
            サインイン
          </Navigate>
          <Navigate href={(path) => path.signup.$url()}>
            サインアップ
          </Navigate>
          <Navigate href={(path) => path.chat.$url()}>
            チャット
          </Navigate>
        </Flex>
      </Container>
    </chakra.footer>
  )
}