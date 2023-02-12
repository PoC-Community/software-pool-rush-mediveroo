import { useState, useEffect } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

import { Button, Text, VStack } from '@chakra-ui/react';

import Input from '../components/Input';
import axios from "axios";

const Register = (): JSX.Element => {
	// useEffect(() => {
	// 	// axios.get("http://localhost:3000/").then((res) => console.log(res));
	// 	// axios.get('http://localhost:3000/').then(resp => {console.log(resp.data);});
	// 	axios.post('http://localhost:3000/login', {
	// 		email: 'Finn',
	// 		password: 'Williams'
	// 	  })
	// 	  .then((response) => {
	// 		console.log(response);
	// 	  }, (error) => {
	// 		console.log(error);
	// 	  });
	// 	}, []);
	const [, setEmail] = useState('');
	const [, setPassword] = useState('');
	const [, setConfirmedPassword] = useState('');
	const navigate = useNavigate();

	function send_register() {
		console.log(setEmail);
		// axios.post('http://localhost:3000/register', {
		// 	email: 'Finn',
		// 	password: 'Williams'
		// })
		//   .then((response) => {
		// 	console.log(response);
		// }, (error) => {
		// 	console.log(error);
		// });
		navigate('/');
		// navigate('/login');
	}

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
				Register
			</Text>
		</VStack>
		<VStack w={{ base: '90%', md: '496px' }} pb={{ base: '32px', md: '48px', lg: '64px' }}>
		<VStack spacing={{ base: '48px', md: '56px', lg: '64px' }} w="100%">
			<VStack spacing={{ base: '16px', md: '24px', lg: '32px' }} w="100%">
				<VStack spacing={{ base: '8px', md: '16px' }} w="100%">
					{/* onChange={(e) => setEmail(e.target.value)} */}
					<Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
					<Input placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)} />
					<Input
						placeholder="Confirm your password..."
						type="password"
						onChange={(e) => setConfirmedPassword(e.target.value)}
					/>
				</VStack>
				<Button
					w="70%"
					type="submit"
                    bgColor='green.500'
					colorScheme="green"
					color="black"
                    _hover={{ opacity: 0.8 }}
					onClick={() => send_register()}
				>
					Register
				</Button>
			</VStack>
			<VStack w="100%">
				<Text fontSize="20px"
                fontWeight="bold"
                >
                    Already an account ?
                </Text>
				<Button
					w="70%"
					type="submit"
                    bgColor='green.300'
					colorScheme="green"
					color="black"
                    _hover={{ opacity: 0.8 }}
					onClick={() => navigate('/login')}
				>
					Login
				</Button>
			</VStack>
		</VStack>
        </VStack>
	</VStack>
	);
};

export default Register;
