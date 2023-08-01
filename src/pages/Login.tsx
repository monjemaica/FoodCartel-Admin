
import { useState } from 'react'
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Image src='../img/logo.jpg' ml='10px' boxSize='80px' objectFit='cover' position='fixed'></Image>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>

          <FormControl id="email" isRequired >
            <FormLabel>Email address</FormLabel>
            <InputGroup overflow='hidden'>
              <InputLeftElement bg='green.500'>
                <AtSignIcon color='white'/>
              </InputLeftElement>
              <Input type='email' placeholder='Enter Email Address' ml='5px' focusBorderColor="green.500"/>
            </InputGroup>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup overflow='hidden'>
              <Input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' ml='5px' focusBorderColor="green.500"/>
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
          </FormControl>
          <Stack spacing={6}>
            <Text color={'green.500'}>Forgot password?</Text>
            <Button colorScheme={'green'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}
