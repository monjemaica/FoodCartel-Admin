import { FormControl, Stack, InputGroup, InputLeftElement, Icon, Input, HStack, Button, Radio, RadioGroup, FormLabel, Switch } from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { BiFoodMenu, BiDollar } from 'react-icons/bi'
import { MdOutlineInventory2 } from 'react-icons/md'
import { TbPhotoEdit } from 'react-icons/tb'
import { FaCheckToSlot } from 'react-icons/fa6'

interface Props {
    onClose: (e: any) => void
}

export const AddFoodForm = ({ onClose }: Props) => {
    const [food, setFood] = useState({
        name: '',
        price: '',
        stocks: '',
        img: '',
        status: false
    })

    const addHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(food);
    }

    return (
        <form onSubmit={addHandler}>
            <FormControl isRequired>
                <Stack spacing={3}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={BiFoodMenu} boxSize={5} color='gray.300' />
                        </InputLeftElement>
                        <Input type='text' onChange={(e) => setFood({ ...food, name: e.target.value })} placeholder='Food Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={BiDollar} color='gray.300' />
                        </InputLeftElement>
                        <Input type='number' onChange={(e) => setFood({ ...food, price: e.target.value })} placeholder='Food Price' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={MdOutlineInventory2} color='gray.300' />
                        </InputLeftElement>
                        <Input type='number' onChange={(e) => setFood({ ...food, stocks: e.target.value })} placeholder='Stocks' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={TbPhotoEdit} boxSize={5} color='gray.300' />
                        </InputLeftElement>
                        <Input type='file' onChange={(e) => setFood({ ...food, img: e.target.value })} pt={1} />
                    </InputGroup>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Enable item in store?
                        </FormLabel>
                        <Switch id='email-alerts' onChange={(e) => setFood({ ...food, status: !food.status})}/>
                    </FormControl>
                </Stack>
            </FormControl>

            <HStack justifyContent='right' marginTop='10'>
                <Button colorScheme='teal' type='submit' mr={3}>Submit</Button>
                <Button onClick={onClose}>Cancel</Button>
            </HStack>
        </form>
    )
}

