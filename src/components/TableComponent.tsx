import { ReactNode } from 'react'
import { Box, Heading} from '@chakra-ui/react'

interface Props {
  header: string
  children: ReactNode
}


export const TableComponent = ({ header, children }: Props) => {
  return (
    <Box position="relative" p={6} w={'100%'} bg={'white'} borderRadius={10}>
      <Heading size='lg'>{header}</Heading>
      {children}
    </Box>
  )
}
