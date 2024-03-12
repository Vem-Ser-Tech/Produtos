import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardProdutos({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image_link}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>{product.name}</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>
              Preço: {product.price_sign}
              {product.price}
              {product.currency}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
