import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';

import { Button } from '@mui/material';

import styled from "styled-components";

import { useState, useEffect } from 'react';
const Btn = styled('button')(({ theme }) => ({
  backgroundColor: 'red', // var(--mui-palette-primary-main)
  color: 'white', // var(--mui-palette-primary-contrastText)
}));
const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {

    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
          {mode === 'light' ? 'Dark' : 'Light'}
          <Btn/>
    </Button>
  );
};

export default function WhiteOrDark() {
  return (
    <CssVarsProvider>
      <ModeSwitcher />
    </CssVarsProvider>
  );
}