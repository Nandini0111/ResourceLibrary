import React, { useState } from 'react';
import ResourceTab from './ResourceTab'; // Assuming this handles category filtering
import ResourceCard from './ResourceCard';
import resources from './Data/Links.json'; 
import { Box, Typography, TextField } from "@mui/material";

function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('saving'); // Default to 'saving' or any category you prefer



  // Assuming ResourceTab can change the activeCategory
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Filter resources based on search term and active category
  const filteredResources = resources[activeCategory].filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography align="center" variant="h1">
        Resource Library
      </Typography>
      <Typography align="center">Build your financial knowledge.</Typography>
      
      <div className="container mx-auto p-6">
        <ResourceTab onCategoryChange={handleCategoryChange} /* props */ />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
