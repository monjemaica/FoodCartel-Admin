import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Box,
    Flex,
  } from '@chakra-ui/react'

const Statistics = () => {
  return (
    <>
     <Flex gap={5}>
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
      </Flex>
    </>
  )
}

export default Statistics;