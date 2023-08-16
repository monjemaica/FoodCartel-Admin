import { Button, FormControl, FormLabel, Switch, Image, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, Avatar, AvatarBadge, Center, IconButton } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { BiDollar, BiFoodMenu } from 'react-icons/bi'
import { TbPhotoEdit } from 'react-icons/tb';
import { MdOutlineInventory2 } from 'react-icons/md';
import { SmallCloseIcon } from '@chakra-ui/icons';

interface Props {
    selectedFood: any
    setSelectedFood: (e: any) => any
}

export const UpdateMemberForm = ({ selectedFood, setSelectedFood }: Props) => {
    const [image, setImage] = useState({ preview: "", raw: {} });

    const updateHandler = (e: FormEvent) => {
        e.preventDefault();
        const newFood = {
            _id: selectedFood._id,
            name: selectedFood.name,
            img: selectedFood.img,
            price: selectedFood.price,
            stocks: selectedFood.stocks

        }


    }

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (!files) return null;
        setImage({
            preview: URL.createObjectURL(files[0]),
            raw: files[0]
        });
    }

    return (
        <>
            <form onSubmit={updateHandler}>

                <FormControl isRequired>
                    <Stack spacing={3}>
                        <FormControl id="userName">
                            <Stack direction={['column', 'row']} spacing={6}>
                                <Center>
                                    <label htmlFor="fileInput">
                                        <Avatar size="xl" src={image.preview ? image.preview : `http://localhost:8080/${selectedFood.img}`}>
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
                            </Stack>
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
