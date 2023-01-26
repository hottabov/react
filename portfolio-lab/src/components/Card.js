import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


  return (
    <Box
      borderRadius='10px'
      background={"white"}
      maxW='sm'

    >
      <Image borderRadius='10px' src={imageSrc} alt={title}/>
      <Box p={4} color="blackAlpha.800" textAlign="left">
        <Heading size="lg" pb={2}>
          {title}
        </Heading>
        <Text pb={2}>
          {description}
        </Text>
        <a href="">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
      </Box>

    </Box>
  )
};

export default Card;
