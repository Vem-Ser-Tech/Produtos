import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import noImage from './noImage.jpg';
import { useState, useEffect } from 'react';

export default function CardProdutos({ product }) {
  const [imageStatus, setImageStatus] = useState('loading');

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(product.image_link);

        if (response.status === 404) {
          setImageStatus('error');
        } else {
          setImageStatus('success');
        }
      } catch (error) {
        console.error('Erro ao verificar a imagem:', error);
      }
    };

    checkImage();
  }, [product.image_link]);

  const imagem = imageStatus === 'success' ? product.image_link : noImage;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagem}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>{product.name}</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>
              {product.description}
            </p>
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
