import React from 'react'
import { TableComponent } from '../components/TableComponent'
import { Badge, Box, Button, Divider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import useFoods from '../hooks/useFoods'

export const Menu = () => {
  const {foods} = useFoods();

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
                  <Th >No</Th>
                  <Th >ID</Th>
                  <Th>Customer Name</Th>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>#123</Td>
                  <Td>Customer name</Td>
                  <Td>Jan 20th, 2023</Td>
                  <Td isNumeric>930.00</Td>
                  <Td>
                    <Badge variant='solid' colorScheme='orange'  borderRadius={10} px={2} py={.5} fontWeight={500}>
                      Pending
                    </Badge>
                  </Td>
                  <Td>...</Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>#123</Td>
                  <Td>Customer name</Td>
                  <Td>Jan 20th, 2023</Td>
                  <Td isNumeric>930.00</Td>
                  <Td>
                    <Badge variant='solid' colorScheme='orange' borderRadius={10} px={2} py={.5} fontWeight={500}>
                      Pending
                    </Badge>
                  </Td>
                  <Td>...</Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>#123</Td>
                  <Td>Customer name</Td>
                  <Td>Jan 20th, 2023</Td>
                  <Td isNumeric>930.00</Td>
                  <Td>
                    <Badge variant='solid' colorScheme='orange' borderRadius={10} px={2} py={.5} fontWeight={500}>
                      Pending
                    </Badge>
                  </Td>
                  <Td>...</Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>#123</Td>
                  <Td>Customer name</Td>
                  <Td>Jan 20th, 2023</Td>
                  <Td isNumeric>930.00</Td>
                  <Td>
                    <Badge variant='solid' colorScheme='orange' borderRadius={10} px={2} py={.5} fontWeight={500}>
                      Pending
                    </Badge>
                  </Td>
                  <Td>...</Td>
                </Tr>

              </Tbody>
            </Table>
          </TableContainer>
      </TableComponent>
    </>
  )
}
