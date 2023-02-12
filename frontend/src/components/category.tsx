import React from 'react';
import { Flex, Image } from '@chakra-ui/react'


export const Class_img = () => {
      const handleClick_head = () => {
        window.scrollTo({ top: 100, behavior: "smooth" });
      };
      const handleClick_arm = () => {
            window.scrollTo({ top: 2000, behavior: "smooth" });
      };
      const handleClick_gorge = () => {
        window.scrollTo({ top: 600, behavior: "smooth" });
      };
      const handleClick_abdo = () => {
        window.scrollTo({ top: 900, behavior: "smooth" });
      };
      return (
        //<Button onClick={handleClick}>Scroll to y=180</Button>
        <div className='icone'>
        <Flex justifyContent="center">
        <Image onClick={handleClick_gorge} borderRadius='full' boxSize='150px' src='./gorge-irritee.png' alt='Mal de Gorge' mr={100} mt={10}/>
        <Image onClick={handleClick_head} borderRadius='full' boxSize='150px' src='./mal-de-crane.png' alt='Mal de Tete' mr={100} mt={10}/>
        <Image onClick={handleClick_abdo} borderRadius='full' boxSize='150px' src='./abdominal-pain.png' alt='Mal de Ventre' mr={100} mt={10}/>
        <Image onClick={handleClick_arm} borderRadius='full' boxSize='150px' src='./foot_arm.svg' alt='Douleurs Jambes/Bras'mt={10}/>
        </Flex>
        </div>
      );
    };

