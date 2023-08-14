import { Button, FormControl, FormLabel, Switch, HStack, Icon, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { BiDollar, BiFoodMenu } from 'react-icons/bi'
import { TbPhotoEdit } from 'react-icons/tb';
import { MdOutlineInventory2 } from 'react-icons/md';

interface Props {
    food: any
    setFood: (e: any) => any
}

export const UpdateMemberForm = ({ food, setFood }: Props) => {
    console.log(food)
    const updateHandler = (e: FormEvent) => {
        e.preventDefault();
        const newFood = {
            _id: food._id,
            name: food.name,
            img: food.img,
            price: food.price,
            stocks: food.stocks

        }
        console.log(newFood);
    }

    return (
        <>
            <form onSubmit={updateHandler}>

                <FormControl isRequired>
                    <Stack spacing={3}>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BiFoodMenu} boxSize={5} color='gray.300' />
                            </InputLeftElement>
                            <Input type='text' value={food.name} onChange={(e) => setFood({ ...food, name: e.target.value })} placeholder='Food Name' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BiDollar} color='gray.300' />
                            </InputLeftElement>
                            <Input type='number' value={food.price} onChange={(e) => setFood({ ...food, price: e.target.value })} placeholder='Food Price' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={MdOutlineInventory2} color='gray.300' />
                            </InputLeftElement>
                            <Input type='number' value={food.stocks} onChange={(e) => setFood({ ...food, stocks: e.target.value })} placeholder='Stocks' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={TbPhotoEdit} boxSize={5} color='gray.300' />
                            </InputLeftElement>
                            <Input type='file' pt={1} />
                        </InputGroup>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Enable item in store?
                            </FormLabel>
                            <Switch id='email-alerts' isChecked={food.status} onChange={(e) => setFood({ ...food, status: !food.status })} />
                        </FormControl>
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
