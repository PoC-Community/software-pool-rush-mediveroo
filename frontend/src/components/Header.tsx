import React from 'react';
import { Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    return (
        <Flex align="center" p={5} bgColor='black'>
            <Image src="./logo2.png" alt="logo mediveroo" width={120} />
            <Text ml={5} fontWeight="bold" color='white' fontSize={50} fontFamily="monospace">Mediveroo</Text>
            {/* <Flex alignItems="right"> */}
                <Button alignItems='right'>
                    <i className="fas fa-shopping-cart fa-2x" color='white'></i>
                </Button>
                <Button w="10%" variant='outline'type="submit" bgColor='white' borderColor='green'
                borderWidth={3} _hover={{ opacity: 0.8 }}
                // onClick={() => navigate('/order')}
                >
                    Login
                </Button>
                <Button
                w="10%"
                type="submit"
                bgColor='green.500'
                _hover={{ opacity: 0.8 }}
                // onClick={() => navigate('/order')}
                >
                    Register
                </Button>
            {/* </Flex> */}
        </Flex>
    );
};

export default Header;