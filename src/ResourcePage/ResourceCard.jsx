import React from 'react';
import { Button, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

const ResourceCard = ({ image, title, description, url }) => {
  const handleCardClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden p-1">
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          sx={{height:"300"}}
          className='max-h-72 min-h-72 rounded-sm'
          image={image}
          alt={title}
        />
        <CardContent>
          <div className="font-bold text-lg">{title}</div>
          <p className="text-gray-600 text-base">{description}</p>
        </CardContent>
        <button type="button" class= "text-white bg-[#4285F4]/90 hover:bg-[#4285F4] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
        {/* <button type="button" class="text-white bg-[#446894] hover:bg-[#B9D7EA] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button> */}
      </CardActionArea>
    </Card>
  );
};

export default ResourceCard;
