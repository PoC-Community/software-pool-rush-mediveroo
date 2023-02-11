import React from 'react';
import { Button, Flex, Image, Text, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <Flex align="center" p={5} bgColor='blackAlpha.900'>
            <Image src="./logo2.png" alt="logo mediveroo" width={120} onClick={() => navigate('/')}/>
            <Text ml={7} fontWeight="bold" color='white' fontSize={50} fontFamily="monospace">Mediveroo</Text>
            <Flex justifyContent="flex-end" w="80%">
                <Button alignItems='right' bgColor='white' mr={5} onClick={() => navigate('/cart')}>
                    <Box pt={1}>
                        <i className="fas fa-shopping-cart fa-2x"></i>
                    </Box>
                </Button>
                <Button w="10%" variant='outline' type="submit" colorScheme='green' bgColor='white'
                borderWidth={3} onClick={() => navigate('/login')}  mr={5}>
                    Login
                </Button>
                <Button w="10%" type="submit" colorScheme='green' onClick={() => navigate('/register')} mr={5}
                // variant='inline'
                // bgColor='green.500'
                // _hover={{ opacity: 0.8 }}
                >
                    Register
                </Button>
            </Flex>
        </Flex>
    );
};

export default Header;