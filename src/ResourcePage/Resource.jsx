import React, { useState } from 'react';
import ResourceTab from './ResourceTab'; 
import ResourceCard from './ResourceCard';
import resources from './Data/Links.json'; 
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

function Resource() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Digital assets and NFTS');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredResources = resources[activeCategory].filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography align="center" variant="h2" className='pb-1 hidden sm:block' sx={{ fontWeight: 'bold' }}>
        Resource Library
      </Typography>
      <Typography align="center" variant="h4" className='pb-2 pt-3 sm:hidden' sx={{ fontWeight: 'bold' }}>
        Resource Library
      </Typography>
      <Typography align="center" className='pb-2'>Build your financial knowledge.</Typography>
      <Divider />
      
      <div className="container mx-auto p-0 sm:p-6">
        <ResourceTab onCategoryChange={handleCategoryChange} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
