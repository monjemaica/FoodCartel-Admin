import { Outlet } from 'react-router-dom';
import { IconButton, Avatar, Box, Flex, HStack, VStack, Icon, useColorModeValue, Text, Drawer, DrawerContent, useDisclosure, BoxProps, FlexProps, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Image } from '@chakra-ui/react'
import { FiHome, FiSettings, FiMenu, FiBell, FiChevronDown } from 'react-icons/fi'
import { PiCallBell, PiUsersThreeLight, PiCaretLeftBold, PiShoppingBagLight } from 'react-icons/pi'
import { MdRestaurantMenu } from 'react-icons/md';
import { IconType } from 'react-icons'
import { useAuth } from '../hooks/useAuth';
import useUsers from '../hooks/useUser';

interface LinkItemProps {
    name: string
    icon: IconType
}

interface NavItemProps extends FlexProps {
    icon: IconType
    link: string
    children: React.ReactNode
}

interface MobileProps extends FlexProps {
    onOpen: () => void,
    user: any
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Menu', icon: MdRestaurantMenu },
    { name: 'Orders', icon: PiShoppingBagLight },
    { name: 'Reservations', icon: PiCallBell },
    { name: 'Customers', icon: PiUsersThreeLight },
    { name: 'Settings', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <HStack justifyContent={'flex-end'} display={{ base: 'flex', md: 'none' }} p="10px">

                <PiCaretLeftBold onClick={onClose} />
            </HStack>
            <Flex h="20" alignItems="center" m="5" justifyContent="center">
                <Image src='../img/logo.jpg' boxSize='120px' objectFit='cover'></Image>
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} link={`/${link.name.toLowerCase()}`}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href={link}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'green.500',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, user, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Image src='../img/logo.jpg' boxSize='50px' objectFit='cover' display={{base:'flex', md:'none'}}></Image>


            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{user.username}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    )
}

const SidebarMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { users } = useUsers();

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} user={users} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                <Outlet />
            </Box>
        </Box>
    )
}

export default SidebarMenu