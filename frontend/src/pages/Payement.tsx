import { Link as RouteLink, useNavigate } from 'react-router-dom';

import { Text, Flex, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Payement = (): JSX.Element => {
	const navigate = useNavigate();

	return (
	<div>
	    <Header/>

        <VStack>

        <Text p={0.5} width={500} borderRadius={50} fontWeight="bold" fontSize="4xl" ml={20}>
				Merci de votre achat!
			</Text>
        <img src='deliver.gif' alt="My GIF"  />

    	</VStack>
	    <Footer/>
	</div>
	);
};

export default Payement;
