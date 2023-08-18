import { AddIcon } from '@chakra-ui/icons'
import { Divider, Button, TableContainer, Stack, Skeleton, Text, Table, Thead, Tr, Th, Tbody, Td, Avatar, Badge, Box } from '@chakra-ui/react'
import { TableComponent } from '../components/TableComponent'
import useOrders from '../hooks/useOrders'
import { paginate } from '../utils/paginate'
import Moment from 'moment';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { Pagination } from '../components/Pagination'
import useUsers from '../hooks/useUsers'
import { User } from '../service/userService'

export const Orders = () => {
  const isLoading = false;
  const skeletons = [1, 2, 3, 4, 5];
  const { orders, currentPage, pageSize, setCurrentPage } = useOrders();
  const {users} = useUsers();
  
  const ordersData = paginate(orders, currentPage, pageSize)
  const handleOnChange = (page: any) => {
    setCurrentPage(page);
  }
  

  const colorStatus: Record<string, any> = {
    'Order Received': 'blue',
    'Preparing': 'orange',
    'Cooking': 'purple',
    'Ready to Serve': 'teal',
    'Food is Served': 'green',
    'Cancelled': 'Cancelled'
  }
  
  const userAddress = users.filter((user) => user._id === "64a4d89a6f9a84dfec5cb912");
  console.log(userAddress)
  return (
    <TableComponent header='Orders'>

      <Divider p={2} />
      {/* <Box py={5}>
        <Button leftIcon={<AddIcon />} colorScheme='green'>Add Item</Button>
      </Box> */}


      <TableContainer>
        {isLoading ?
          <Stack>
            {skeletons.map(e => <Skeleton height='40px' p={2} key={e} />
            )}
          </Stack>
          :
          <Table variant='simple'>

            <Thead>
              <Tr>
                <Th>Order</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th>Ship to</Th>
                <Th>Total Amount</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>


            <Tbody>
              {ordersData.map((order: any) =>
                <Tr key={order._id}>
                  <Td>{order._id}</Td>
                  <Td>{Moment(order.date_created).format('MMMM Do YYYY, h:mm a')} </Td>
                  <Td>
                    <Badge variant='subtle' colorScheme={colorStatus[order.status]} borderRadius={10} px={2} py={.5} fontWeight={500}>
                      {order.status}
                    </Badge>
                  </Td>
                  <Td>{users.map((user:any) => user._id === order.user_id)}</Td>
                  <Td><Text as='b'>₱{order.total_amount.toFixed(2)}</Text></Td>
                  <Td><HiOutlineDotsHorizontal /></Td>
                </Tr>
              )}

              {/* <Tr>
                <Td>test</Td>
                <Td><Avatar src={'img/no-food.jpg'} size='lg' border='10px' borderColor={'green'}></Avatar></Td>
                <Td>test</Td>
                <Td ><Text as='b'>₱22</Text></Td>
                <Td>
                  <Badge variant='solid' colorScheme={'green'} borderRadius={10} px={2} py={.5} fontWeight={500}>
                    'Available'
                  </Badge>
                </Td>
                <Td><HiOutlineDotsHorizontal /></Td>
              </Tr> */}

            </Tbody>
          </Table>
        }


        {/* {foodData?.length === 0 ?
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
      } */}

        <Pagination
          itemsCount={orders.length}
          pgsize={pageSize}
          currentPage={currentPage}
          onChangePage={handleOnChange} />
      </TableContainer>
    </TableComponent>
  )
}
