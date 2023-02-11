import React from 'react';
import { Flex } from '@chakra-ui/react';
import Product from './Product';

type ProductsType = { n1: string } & { n2: string } & { n3: string }
& { n4: string } & { n5: string } & { s1: string } & { s2: string } & { s3: string }
& { s4: string } & { s5: string };

const Products = ({n1, n2, n3, n4, n5, s1, s2, s3, s4, s5 }: ProductsType) => {
    return (
        <Flex mt={2} align="center">
            <Product name={n1} src_i={s1} hid={false} />
            <Product name={n2} src_i={s2} hid={false} />
            <Product name={n3} src_i={s3} hid={false} />
            <Product name={n4} src_i={s4} hid={false} />
            <Product name={n5} src_i={s5} hid={false} />
        </Flex>
    );
};

export default Products;