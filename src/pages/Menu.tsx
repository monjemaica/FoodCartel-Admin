import React from 'react'
import { TableComponent } from '../components/TableComponent'
import { Avatar, Badge, Box, Button, Center, Divider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import useFoods from '../hooks/useFoods'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

interface Props {
  toggleUpdateModal: (e: any) => void
}

export const Menu = ({ toggleUpdateModal }: Props) => {
  const { foods } = useFoods();
  console.log(foods);
  return (
    <>
      <TableComponent header='Menu'>
        <Divider p={2} />
        <Box py={5}>
          <Button leftIcon={<AddIcon />} colorScheme='green'>Add Item</Button>
        </Box>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th >ID</Th>
                <Th>IMG</Th>
                <Th>Customer Name</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {foods.map((food) =>
                <Tr key={food._id}>
                  <Td>{food._id}</Td>
                  <Td><Avatar src={`../../${food.img}`} size='lg' border='10px' borderColor={'green'}></Avatar></Td>
                  <Td>{food.name}</Td>
                  <Td ><Text as='b'>₱{food.price.toFixed(2)}</Text></Td>
                  <Td>
                    <Badge variant='solid' colorScheme='orange' borderRadius={10} px={2} py={.5} fontWeight={500}>
                      Pending
                    </Badge>
                  </Td>
                  <Td onClick={(e) => toggleUpdateModal(e) }><HiOutlineDotsHorizontal /></Td>
                </Tr>
              )}

            </Tbody>
          </Table>
        </TableContainer>
      </TableComponent>
    </>
  )
}
