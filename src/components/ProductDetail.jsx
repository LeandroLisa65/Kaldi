import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ProductDetail = ({ name, price, description, stock, imageURL }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || ''}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comprar</Button>
        </CardActions>
    </Card>
    )
  }

  export default ProductDetail;