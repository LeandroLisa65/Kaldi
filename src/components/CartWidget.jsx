import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
    return (
    <IconButton>
        <Badge color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
    </IconButton>
    )
}