import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import Product from './Product';

type DrugsType = { title: string } & { n1: string } & { n2: string } & { n3: string }
& { n4: string } & { n5: string } & { s1: string } & { s2: string } & { s3: string }
& { s4: string } & { s5: string };

const Drugs = ({ title, n1, n2, n3, n4, n5, s1, s2, s3, s4, s5 }: DrugsType): JSX.Element => {
    return (
        <Box>
            <Text
            fontWeight="bold"
            fontSize="35px"
            textAlign="left"
            mt={10}
            ml={10}
            >
                {title}
            </Text>
            <Flex mt={2} align="center">
                <Product name={n1} src_i={s1} />
                <Product name={n2} src_i={s2} />
                <Product name={n3} src_i={s3} />
                <Product name={n4} src_i={s4} />
                <Product name={n5} src_i={s5} />
            </Flex>
        </Box>
    );
};

export default Drugs;