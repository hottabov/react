import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hottabov@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/hottabov",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/vadim-leonov/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const NavLinks = ({ icon, url }) => {
  return (
    <a href={url} target={"_blank"}>
      <FontAwesomeIcon icon={icon} size="2x"/>
    </a>
  );
}

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className={"nav-links"}>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {socials.map((social) => (
                  <NavLinks key={social.url} icon={social.icon} url={social.url}/>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={handleClick('projects')} className="link" >Featured Projects</a>
              <a onClick={handleClick('contactme')} className="link">Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
