import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

import { ReactComponent as LeemLogo } from "../../assets/leemlogo.svg";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: alabitseleem@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/leem-dev",
  },
  {
    icon: faLinkedin,
    url: "http://www.linkedin.com/in/seleem-alabi-b20877a6/",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [previousScroll, setPreviousScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > previousScroll) {
        headerRef.style.transform = "translateY(-200px)";
      } else {
        headerRef.style.transform = "translateY(0)";
      }
      setPreviousScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScroll]);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="1x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <div>
              <LeemLogo
                className="logo"
                style={{ width: "30px", height: "35px" }}
              />
            </div>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
