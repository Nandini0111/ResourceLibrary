import React from 'react';
import { Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

const ResourceCard = ({ image, title, description, url }) => { // Assuming you pass `url` as a prop now
  const handleCardClick = () => {
    // Open the URL in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
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
