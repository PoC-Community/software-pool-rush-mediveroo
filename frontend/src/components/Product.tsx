import React from 'react';
import { Box, Center, Image, Flex, Text, Button } from "@chakra-ui/react";

type ProductType = { name: string } & { src_i: string };

const Product = ({name, src_i}: ProductType) => {
  return (
    <Center h="35vh" w="20vw">
      <Box p="5" maxW="300px" borderWidth="1px">
        <Image width="200px" borderRadius="md" src={src_i} />
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {name}
        </Text>
        <Flex mt={2} align="center">
          <Button fontSize="sm" bgColor={"orange"} _hover={{ opacity: 0.8 }}>
            Ajouter au panier
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}

export default Product;
