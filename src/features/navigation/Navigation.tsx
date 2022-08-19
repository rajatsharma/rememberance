import React from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";

import { changePage, selectNavigation } from "./Navigation.store";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <span style={{ fontSize: 20 }}>{icon}</span>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: "🏡", label: "Home" },
  { icon: "⚖️", label: "Dashboard" },
  { icon: "🖥", label: "Analytics" },
  { icon: "📅", label: "Releases" },
  { icon: "🧑", label: "Account" },
  { icon: "👆", label: "Security" },
  { icon: "🍽", label: "Settings" },
];

export function Navigation() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectNavigation);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={mockdata[index].label === page}
      onClick={() => dispatch(changePage(mockdata[index].label))}
    />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Center>
        <span style={{ fontSize: 32, cursor: "pointer" }}>🦄</span>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon="🔓" label="Change account" />
          <NavbarLink icon="🏃‍♂️" label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
