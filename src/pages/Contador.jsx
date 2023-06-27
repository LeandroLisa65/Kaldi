import { Typography, Box, styled } from "@mui/material"
import { useState } from "react"
import { useDebounce } from "../hooks/useDebounce";
import React from 'react';

const StyledButton = styled(Box) (({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(1024)]:{
        maxWidth: 5
    },
}))

const MIN_VALUE = 0;
const MAX_VALUE = 10;

const ContadorPage = () => {
    const [valor,setValue] = useState(0);
    const textref = React.useRef(null);
    const handlePressMinus = () => {
        if(valor <= MIN_VALUE)
            return;

        setValue(valor - 1)
    }

    const handlePressSum = () => {
        if(valor >= MAX_VALUE)
            return;

        setValue(valor + 1);
    }

    if(textref) {
        console.log(textref.current);
        console.log(textref.current.value);
        console.log(textref.current.textContent);
    }

    return (
        <div>
            <Typography ref={textref} variant="h1">
                Contador:
            </Typography>
            <Box>
                <Typography>Valor: {useDebounce(valor, 1000)}</Typography>
                <Box>
                    <StyledButton onClick={handlePressMinus}>
                        -
                    </StyledButton>
                    <StyledButton onClick={handlePressSum}>
                        +
                    </StyledButton>
                </Box>
            </Box>
        </div>
    )
}

export default ContadorPage;