
import { useState } from 'react'
import { Button, Flex, Text, FormControl, FormLabel, Heading, Input, Stack, Image, InputGroup, InputLeftElement, InputRightElement,FormErrorMessage } from '@chakra-ui/react'
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import authService from '../service/authService'
import { useNavigate } from 'react-router-dom'


interface Props{
  cookieAuth: (e: any) => any
  getUserData: (e: any) => any
}

export const Login = ({cookieAuth, getUserData}:Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [admin, setAdmin] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    authService.create(admin).then((res) => {
      setAdmin(admin)
      cookieAuth(res.data.data.authentication.sessionToken)
      getUserData(res.data.data)
      localStorage.setItem('USERDATA', JSON.stringify(res.data.data));
      navigate("/");
    })
    .catch(err => setError(err.response.data));
  }


  return (
    <>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Image src='../img/logo.jpg' ml='10px' boxSize='80px' objectFit='cover' position='fixed'></Image>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>

            <form onSubmit={submitHandler} autoComplete="on">
              <FormControl isRequired >
                <FormLabel>Email address</FormLabel>
                <InputGroup overflow='hidden'>
                  <InputLeftElement bg='green.500'>
                    <AtSignIcon color='white' />
                  </InputLeftElement>
                  <Input id="email" type='email' value={admin.email} onChange={(e) => setAdmin({ ...admin, email: e.target.value })} placeholder='Enter Email Address' ml='5px' focusBorderColor="green.500" required />
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={error !== ''} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup overflow='hidden'>
                  <Input id="password" type={showPassword ? 'text' : 'password'} value={admin.password} onChange={(e) => setAdmin({ ...admin, password: e.target.value })} placeholder='Enter Password' ml='5px' focusBorderColor="green.500" required />
                  <InputLeftElement bg='green.500'>
                    <LockIcon color='white' />
                  </InputLeftElement>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {error !== '' && <FormErrorMessage>{error}</FormErrorMessage>}
              </FormControl>

              <Stack spacing={6}>
                <Text color={'green.500'}>Forgot password?</Text>
                <Button type='submit' colorScheme={'green'} variant={'solid'}>
                  Sign in
                </Button>
              </Stack>

            </form>
          </Stack>
        </Flex>
        <Flex flex={1} bg='green.400'>
          {/* <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        /> */}
        </Flex>
      </Stack>
    </>
  )
}
