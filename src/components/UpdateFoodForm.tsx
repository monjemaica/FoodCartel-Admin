import { Button, FormControl, FormLabel, Switch, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, Avatar, AvatarBadge, Center, IconButton } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { BiDollar, BiFoodMenu } from 'react-icons/bi'
import { MdOutlineInventory2 } from 'react-icons/md';
import { SmallCloseIcon } from '@chakra-ui/icons';
import foodService from '../service/foodService';
import useFoods from '../hooks/useFoods';

interface Props {
    foods: any
    selectedFood: any
    setSelectedFood: (e: any) => any
    onClose: (e: any) => void
}

export const UpdateMemberForm = ({ foods, selectedFood, setSelectedFood, onClose }: Props) => {
    const [previewImg, setpreviewImg] = useState("");
    const [img, setImg] = useState<File>()

    const {setFoods} = useFoods();

    const updateHandler = (e: FormEvent) => {
        e.preventDefault();
        const newFood = {
            _id: selectedFood._id,
            name: selectedFood.name,
            price: selectedFood.price,
            stocks: selectedFood.stocks,
            status: selectedFood.status
        }

        const formData = new FormData();
        formData.append('name', newFood.name);
        formData.append('price', newFood.price);
        formData.append('stocks', newFood.stocks);
        formData.append('status', newFood.status);

        if (img) {
            formData.append('img', img);
        }

        foodService.update(formData, newFood._id).then((res) => {
            setFoods([res.data.data, ...foods])
            onClose(e);
        }).catch((err) => err(err.message));

    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (!files) return null;
        setpreviewImg(URL.createObjectURL(files[0]));
        setImg(files[0]);
    }

    return (
        <>
            <form onSubmit={updateHandler}>

                <FormControl isRequired>
                    <Stack spacing={3}>
                        <FormControl id="userName">
                            <Center>
                                <label htmlFor="fileInput">
                                    <Avatar size="xl" src={previewImg ? previewImg : `http://localhost:8080/${selectedFood.img}`}>
                                        <AvatarBadge
                                            as={IconButton}
                                            size="sm"
                                            rounded="full"
                                            top="-10px"
                                            colorScheme="red"
                                            aria-label="remove Image"
                                            icon={<SmallCloseIcon />}
                                        />
                                    </Avatar>
                                    <input type="file" id="fileInput" name="fileInput" onChange={uploadHandler} hidden />
                                </label>
                            </Center>
                        </FormControl>

                        <FormControl id="name" isRequired>
                            <FormLabel>Name:</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={BiFoodMenu} boxSize={5} color='gray.300' />
                                </InputLeftElement>
                                <Input type='text' id='name' value={selectedFood.name} onChange={(e) => setSelectedFood({ ...selectedFood, name: e.target.value })} placeholder='Food Name' />
                            </InputGroup>
                        </FormControl>

                        <FormControl id="price" isRequired>
                            <FormLabel>Price:</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={BiDollar} color='gray.300' />
                                </InputLeftElement>
                                <Input type='number' id='price' value={selectedFood.price} onChange={(e) => setSelectedFood({ ...selectedFood, price: e.target.value })} placeholder='Food Price' />
                            </InputGroup>
                        </FormControl>

                        <FormControl id="name" isRequired>
                            <FormLabel>Stocks:</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={MdOutlineInventory2} color='gray.300' />
                                </InputLeftElement>
                                <Input type='number' id='stocks' value={selectedFood.stocks} onChange={(e) => setSelectedFood({ ...selectedFood, stocks: e.target.value })} placeholder='Stocks' />
                            </InputGroup>
                        </FormControl>

                        <FormControl display='flex' alignItems='center' isRequired>
                            <FormLabel htmlFor='upload-photo' mb='0'>
                                Enable item in store?
                            </FormLabel>
                            <Switch id='upload-photo' isChecked={selectedFood.status} onChange={(e) => setSelectedFood({ ...selectedFood, status: !selectedFood.status })} />
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
