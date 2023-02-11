import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

type CustomInputProps = {
	inputType?: 'black' | 'white';
};

const Input = ({ inputType = 'black', ...rest }: CustomInputProps & InputProps): JSX.Element => (
	<ChakraInput
		border="2px solid"
		borderColor={inputType === 'black' ? 'black.500' : 'black.300'}
		color="black"
		_focus={{ outline: 'none', borderColor: inputType === 'black' ? 'black.300' : 'black' }}
		{...rest}
	/>
);

export default Input;