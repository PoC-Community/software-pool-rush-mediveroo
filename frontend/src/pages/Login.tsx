import { useState } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

import { Button, Text, VStack } from '@chakra-ui/react';

import Input from '../components/Input';

const Login = (): JSX.Element => {
	const [, setEmail] = useState('');
	const [, setPassword] = useState('');
	const navigate = useNavigate();

	return (
        <VStack spacing="56px" mt={{ base: '96px', md: '132px' }}>
		<VStack spacing="16px">
			<Text
				fontSize={{ base: '32px', md: '56px', lg: '72px' }}
				fontWeight="extrabold"
				// bgGradient={`linear-gradient(90deg, #4B66FA} 0%, #FA5074} 100%)`}
				// bgClip="text"
				textAlign="center"
			>
				Login
			</Text>
		</VStack>
		<VStack w={{ base: '90%', md: '496px' }} pb={{ base: '32px', md: '48px', lg: '64px' }}>
		<VStack spacing={{ base: '48px', md: '56px', lg: '64px' }} w="100%">
			<VStack spacing={{ base: '16px', md: '24px', lg: '32px' }} w="100%">
				<VStack spacing={{ base: '8px', md: '16px' }} w="100%">
					<Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
					<Input placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)} />
				</VStack>
				<Button
					w="70%"
					type="submit"
                    bgColor='green.500'
					colorScheme="green"
					color="black"
                    _hover={{ opacity: 0.8 }}
					onClick={() => navigate('/')}
				>
					Login
				</Button>
			</VStack>
			<VStack w="100%">
				<Text fontSize="20px"
                fontWeight="bold"
                >
                    Create an account...
                </Text>
				<Button
					w="70%"
					type="submit"
                    bgColor='green.300'
					colorScheme="green"
					color="black"
                    _hover={{ opacity: 0.8 }}
					onClick={() => navigate('/register')}
				>
					Register
				</Button>
			</VStack>
		</VStack>
        </VStack>
	</VStack>
	);
};

export default Login;