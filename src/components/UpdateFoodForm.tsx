import { Button, FormControl, HStack, Icon, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { FormEvent } from 'react'
import {BiDollar, BiFoodMenu} from 'react-icons/bi'
import {TbPhotoEdit} from 'react-icons/tb';
import { MdOutlineInventory2 } from 'react-icons/md';
// interface Family {
//     _id: string,
//     name: string,
//     age: number,
//     role: string,
//     birthday: string
// }

// interface Props {
//     families: Family[]
//     selectedMember: any,
//     setMember: (e: any) => any,
//     updateMember: (e: any) => any,
//     error: (e: any) => any,
//     onClose: (e: any) => any
// }

export const UpdateMemberForm = () => {

    const updateHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log('update')
    }

    return (
        <>
            <form onSubmit={updateHandler}>
                <FormControl isRequired>
                    <Stack spacing={3}>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BiFoodMenu} boxSize={5} color='gray.300'/> 
                            </InputLeftElement>
                            <Input type='tel' placeholder='Food Name' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={TbPhotoEdit} boxSize={5} color='gray.300'/> 
                            </InputLeftElement>
                            <Input type='file' pt={1} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BiDollar} color='gray.300' />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Food Price' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BiDollar} color='gray.300' />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Status' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={MdOutlineInventory2} color='gray.300' />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Stocks' />
                        </InputGroup>
                    </Stack>
                </FormControl>

                <HStack justifyContent='right' marginTop='10'>
                    <Button colorScheme='teal' type='submit' mr={3}>Submit</Button>
                    <Button>Cancel</Button>
                </HStack>
            </form>
        </>
    )
}
