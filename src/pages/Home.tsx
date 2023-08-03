import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Heading,
  Box,
  Flex,
  VStack,
  StackDivider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge
} from '@chakra-ui/react'
import Statistics from '../components/Statistics'

export const Home = () => {
  return (
    <>
      {/* <Flex gap={5}>
        <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>
          <Stat variant="great" >
            <StatLabel>Total Orders</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>

        <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>
        
          <Stat variant="great" >
            <StatLabel>Sent</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>


        </Box>
        <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>

          <Stat variant="great" >
            <StatLabel>Sent</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>


        </Box>
        <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>

          <Stat variant="great" >
            <StatLabel>Sent</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>


        </Box>
      </Flex> */}
      <Statistics />
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        marginTop={5}
        align='stretch'
      >
        <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>
          <Heading as='h2' size='md'>
            Order List
          </Heading>
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

        </Box>
        <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>
          <Heading as='h2' size='md'>
            Order List
          </Heading>
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

        </Box>
       
      </VStack>

    </>
  )
}
