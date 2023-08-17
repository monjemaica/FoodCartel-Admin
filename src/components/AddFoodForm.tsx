import { FormControl, Stack, InputGroup, InputLeftElement, Icon, Input, HStack, Button, FormLabel, Switch } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { BiFoodMenu, BiDollar } from 'react-icons/bi'
import { MdOutlineInventory2 } from 'react-icons/md'
import { TbPhotoEdit } from 'react-icons/tb'
import foodService, { Food } from '../service/foodService'
import useFoods from '../hooks/useFoods'

interface Props {
    foods: Food[]
    setFoods: (e: any) => any
    onClose: (e: any) => void
}

export const AddFoodForm = ({ foods,setFoods, onClose }: Props) => {
    const [food, setFood] = useState({
        name: '',
        price: '',
        stocks: '',
        status: false
    })

    const [img, setImg] = useState<File>()
    const { error, setError } = useFoods()

    const addHandler = (e: FormEvent) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('name', food.name);
        formData.append('price', food.price);
        formData.append('stocks', food.stocks);
        formData.append('status', `${food.status}`);

        if (img) {
            formData.append('img', img);
        }

        foodService.create(formData).then((res) => {
            console.log([ ...foods, res.data.data])
            setFoods([ ...foods, res.data.data])
            onClose(e);
        })
        .catch( (err) => setError(err.message))
    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (!files) return null;
        setImg(files[0])
    }

    return (
        <form onSubmit={addHandler}>
            {error}
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
                        <Input type='file' onChange={uploadHandler} pt={1} />
                    </InputGroup>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Enable item in store?
                        </FormLabel>
                        <Switch id='email-alerts' onChange={(e) => setFood({ ...food, status: !food.status })} />
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

