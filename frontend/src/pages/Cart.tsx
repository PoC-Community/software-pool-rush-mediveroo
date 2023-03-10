import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <Text
            fontWeight="extrabold"
            fontSize="40px"
            textAlign="left"
            mt={10}
            ml={10}
            >
                Mon panier
            </Text>
            <Flex align="center">
                <Product name={"Dolipranne 1000mg"} src_i={"./doliprane.png"} hid={true} />
            </Flex>
            <Flex p={5} mt={10} justifyContent='center'>
            <Button colorScheme='green' outlineColor='green.400' onClick={() => navigate('/payement')}>Payer</Button>
            </Flex>

            <Footer />

        </div>
    );
};

export default Cart;