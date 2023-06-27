import React from "react";
import { Box, styled } from '@mui/material'

const Contenedor = styled(Box) (({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(1024)]:{
        maxWidth: 5
    },
}))

