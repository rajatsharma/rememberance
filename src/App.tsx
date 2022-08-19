import React from "react";
import { AppShell, Title, createStyles } from "@mantine/core";
import { Navigation } from "./features/navigation/Navigation";
import { useAppSelector } from "./app/hooks";
import { selectNavigation } from "./features/navigation/Navigation.store";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
  },
}));

function App() {
  const { classes } = useStyles();
  const page = useAppSelector(selectNavigation);

  return (
    <AppShell navbar={<Navigation />}>
      <Title className={classes.title}>{page}</Title>
    </AppShell>
  );
}

export default App;
