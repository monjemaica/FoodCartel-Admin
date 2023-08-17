import { TableComponent } from '../components/TableComponent'
import { Avatar, Badge, Box, Button, Divider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Image, Center } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { Pagination } from '../components/Pagination'
import { Food } from '../service/foodService'

interface Props {
  foodData: Food[]
  onAddHandler: (e: any) => any;
  updateHandler: (e: any, food: any) => any;
  onPageChange: (e: any) => any;
  currentPage: number;
  totalItems: number;
  pageSize: any;
}

export const Menu = ({ foodData, onAddHandler, updateHandler, onPageChange, currentPage, totalItems, pageSize }: Props) => {

  return (
    <>
      <TableComponent header='Menu'>
        <Divider p={2} />
        <Box py={5}>
          <Button onClick={onAddHandler} leftIcon={<AddIcon />} colorScheme='green'>Add Item</Button>
        </Box>
        <TableContainer>
          <Table variant='simple'>

            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>IMG</Th>
                <Th>Customer Name</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {foodData.map((food: any) =>
                <Tr key={food._id}>
                  <Td>{food._id}</Td>
                  <Td><Avatar src={`http://localhost:8080/${food?.img}`} size='lg' border='10px' borderColor={'green'}></Avatar></Td>
                  <Td>{food.name}</Td>
                  <Td ><Text as='b'>₱{food.price.toFixed(2)}</Text></Td>
                  <Td>
                    <Badge variant='solid' colorScheme={food.status ? 'green' : 'orange'} borderRadius={10} px={2} py={.5} fontWeight={500}>
                      {food.status ? 'Available' : 'Not Available'}
                    </Badge>
                  </Td>
                  <Td onClick={(e) => updateHandler(e, food)}><HiOutlineDotsHorizontal /></Td>
                </Tr>
              )}

            </Tbody>
          </Table>

          {foodData.length === 0 ?
            <Center>
              <Box boxSize='sm' >
                <Image src='img/no-data.png' alt='Dan Abramov' />
              </Box>
            </Center>
            :
            <Pagination
              itemsCount={totalItems}
              pgsize={pageSize}
              currentPage={currentPage}
              onChangePage={onPageChange} />
          }
        </TableContainer>
      </TableComponent>
    </>
  )
}
