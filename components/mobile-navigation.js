import React from "react";
import {
  Box,
  Center,
  HStack,
  IconButton,
  useColorModeValue,
  Button,
  VStack,
} from "@chakra-ui/react";
import { PencilIcon } from "@heroicons/react/solid";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./mobile-menu-toggle";
import MobileMenuItem from "./mobile-menu-item";
import ThemeToggle from "./theme-toggle";
import NewsletterDrawer from "./newsletter-drawer";
import MobileMenuButton from "./mobile-menu-button";
import Link from "next/link";

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const links = [
    {
      route: `/`,
      title: `Home`,
    },
    {
      route: `/about`,
      title: `About`,
    },
    {
      route: `/blog`,
      title: `Blog`,
    },
    {
      route: `/books`,
      title: `Books`,
    },
  ];

  const menuvariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const navvariants = {
    open: {
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
    closed: {},
  };

  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);

  return (
    <MotionBox
      initial={false}
      animate={isOpen ? "open" : "closed"}
      position="fixed"
      bottom="0"
      right="0"
      left="0"
      display={{ base: "block", md: "none" }}
    >
      <HStack
        justify="space-around"
        align="center"
        py={2}
        mt="auto"
        height={16}
        bg={useColorModeValue("white", "neutralD.100")}
        borderTopWidth="2px"
        borderTopColor={useColorModeValue("neutral.400", "neutralD.400")}
        shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
      >
        {/* <Link href="/blog">
          <MobileMenuButton
            label="Blog"
            icon={<PencilIcon />}
          ></MobileMenuButton>
        </Link> */}
        <Center w="100%">
          <ThemeToggle mobile />
        </Center>
        <Center w="100%">
          <MenuToggle toggle={() => toggleOpen()} />
        </Center>
        <Center w="100%">
          <NewsletterDrawer mobile />
        </Center>
        {/* <NewsletterDrawer mobile /> */}
      </HStack>
    </MotionBox>
  );
};

export default MobileNavigation;
