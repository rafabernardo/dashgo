import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputsProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputsProps {
  id: string
  name: string
  label?: string
}

export function Input({ id, label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={id}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
