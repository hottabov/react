import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Vadym!";
const bio1 = "A cool frontend developer";
const bio2 = "specialised in React by Meta";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name='Vadym Leonov' src='https://i.pravatar.cc/150?img=8' h={100} w={100}/>
    <Heading as={"h4"} size={"md"} noOfLines={1}>{greeting}</Heading>
    <VStack>
      <Heading as={"h1"} size={"3x1"} noOfLines={1}>{bio1}</Heading>
      <Heading as={"h1"} size={"3x1"} noOfLines={1}>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
