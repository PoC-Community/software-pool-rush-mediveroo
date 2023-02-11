import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';

const Cart = () => {
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
                <Product name={"Dolipranne 1000mg"} src_i={"./doliprane.png"} hid={false} />
            </Flex>
            <Footer />
        </div>
    );
};

export default Cart;