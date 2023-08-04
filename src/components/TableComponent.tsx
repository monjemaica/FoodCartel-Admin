import { ReactNode } from 'react'
import { Badge, Box, Heading, Table, Tbody, Td, Th, Thead, Tr, TableContainer} from '@chakra-ui/react'

// interface TableItem {
//   th: string,
//   td
// }

// const TableItems: Array<TableItem> = [
//   { th: 'No'},
//   { th: 'ID'},
//   { th: 'Customer Name' },
//   { th: 'Reservations' },
//   { th: 'Customers'},
//   { th: 'Settings' },
// ]

interface Props {
  header: string
  children: ReactNode
}


export const TableComponent = ({ header, children }: Props) => {
  return (
    <Box position="relative" p={6} w={'100%'} h={'100vh'} bg={'white'} borderRadius={10}>
      <Heading size='lg'>{header}</Heading>
      {children}
    </Box>
  )
}
