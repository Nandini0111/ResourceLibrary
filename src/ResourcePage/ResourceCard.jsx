import React from 'react';
import { Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

const ResourceCard = ({ image, title, description, url }) => {
  const handleCardClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          sx={{height:"200"}}
          image={image}
          alt={title}
        />
        <CardContent>
          <div className="font-bold text-lg">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResourceCard;
