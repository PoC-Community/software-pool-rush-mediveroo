import React from 'react';
import { Box, Center, Image, Flex, Text, Button } from "@chakra-ui/react";

type ProductType = { name: string } & { src_i: string } & {hid: boolean};

const Product = ({name, src_i, hid}: ProductType) => {
  return (
    <Center h="35vh" w="20vw">
      <Box p="5" maxW="300px" borderWidth="1px">
        <Image width="200px" borderRadius="md" src={src_i} />
        {/* <svg width="150px" height="150px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M33.956002 93.849026l326.194325 0 0 800.892063-326.194325 0 0-800.892063Z" fill="#DAAAAB" /><path d="M231.051786 1024A216.179916 216.179916 0 0 1 15.032241 807.980455V239.786506a216.019545 216.019545 0 0 1 432.039091 0v568.033578a216.179916 216.179916 0 0 1-216.019546 216.179916z m0-962.225146a178.172023 178.172023 0 0 0-178.011652 178.011652v568.033578a178.011652 178.011652 0 1 0 356.023304 0V239.786506a178.172023 178.172023 0 0 0-178.011652-178.011652z" fill="#892127" /><path d="M231.051786 523.963666H33.956002v284.016789a196.935413 196.935413 0 0 0 171.276076 195.171334 55.969429 55.969429 0 0 1 25.659338-105.684396 129.258911 129.258911 0 0 0 129.258911-129.258911V523.963666h-129.258911z" fill="#892127" /><path d="M392.821848 45.966675l322.940098-45.961182 112.846679 792.902089-322.940098 45.961182-112.846679-792.902089Z" fill="#DAAAAB" /><path d="M906.533839 213.164944l77.298753 562.90171a216.019545 216.019545 0 0 1-428.029819 58.695734l-77.298753-562.90171a216.019545 216.019545 0 1 1 428.029819-58.695734z m39.611601 568.033578l-77.298753-562.901711a178.043726 178.043726 0 1 0-352.815887 48.111258l77.298754 562.90171a178.011652 178.011652 0 1 0 352.815886-47.630145z" fill="#892127" /><path d="M731.248491 523.963666l-128.296686 17.640794-67.195389 9.141139-38.328635-282.252709a196.935413 196.935413 0 0 1 143.211176-216.661029 55.969429 55.969429 0 0 0 39.771972 101.194011 129.258911 129.258911 0 0 1 145.616739 110.495521l33.196768 241.999624z" fill="#892127" /></svg> */}
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {name}
        </Text>
        <Flex mt={2} align="center">
          <Button fontSize="sm" bgColor={"green.400"} colorScheme="green" color="black" _hover={{ opacity: 0.8 }} hidden={hid}>
            Ajouter au panier
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}

export default Product;