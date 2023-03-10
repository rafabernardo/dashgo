import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1488}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          mr="4"
          px="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Rafaela Rodrigues</Text>
            <Text color="gray.300" fontSize="small">
              rafabernardo.r@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Rafaela Rodrigues"
            src="https://raw.githubusercontent.com/rafabernardo/rafabernardo/main/assets/avatar.png"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
