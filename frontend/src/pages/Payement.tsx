import { useState } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

import { Text, Link, Flex, Box  } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Payement = (): JSX.Element => {
	const navigate = useNavigate();

	return (
	<div>
	    <Header/>
        <Flex justifyContent="center" m={20}>
      <Text p={0.5} width={400} borderRadius={50} fontFamily="monospace" fontSize="3xl">
        Merci de votre achat !
      </Text>
    </Flex>
	    <Footer/>
	</div>
	);
};

export default Payement;
