import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import EstusFlaskImage from './images/Estus_Flask_29_-_01.webp'; // Import the Estus Flask image file
import AshenEstusImage from './images/Ashen_Estus_Flask_-_01.webp'; // Import the Ashen Estus Flask image file
import Ember from './images/ember.webp';

function ProductsPage() {
  const [enlargedImg, setEnlargedImg] = useState(null);
  const [clickCounts, setClickCounts] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    // Add more products as needed
  });

  const handleProductClick = (productName) => {
    setClickCounts(prevCounts => ({
      ...prevCounts,
      [productName]: prevCounts[productName] + 1,
    }));
  };

  const handleImageClick = (image) => {
    setEnlargedImg(image);
  };

  const handleCloseEnlargedImg = () => {
    setEnlargedImg(null);
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Products
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Product 1 */}
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea onClick={() => { handleImageClick(EstusFlaskImage); handleProductClick('product1'); }}>
              <CardMedia
                component="img"
                height="140"
                image={EstusFlaskImage}
                alt="Estus Flask"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Estus Flask
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  One of the most delicious drinks of this realm, it say it fills your vigor one you drink it.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clicks: {clickCounts.product1}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Product 2 */}
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea onClick={() => { handleImageClick(AshenEstusImage); handleProductClick('product2'); }}>
              <CardMedia
                component="img"
                height="140"
                image={AshenEstusImage}
                alt="Ashen Estus Flask"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ashen Estus Flask
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A flask filled with a more powerful essence.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clicks: {clickCounts.product2}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Product 3 */}
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea onClick={() => { handleImageClick({Ember}); handleProductClick('product3'); }}>
              <CardMedia
                component="img"
                height="140"
                image={Ember}
                alt="Product 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Embers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                No Unkindled can ever truly claim the embers that burn within a champion’s bosom, which is precisely what makes their yearning for warmth so keen.

Gain the strength of flame and increase max HP until death.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clicks: {clickCounts.product3}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Add more products here */}
        </Box>
      </Box>

      {/* Enlarged Image Dialog */}
      {enlargedImg && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img src={enlargedImg} alt="imageeee" style={{ maxWidth: '90%', maxHeight: '90%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', borderRadius: '8px' }} />
            <button onClick={handleCloseEnlargedImg} style={{ position: 'absolute', top: 0, right: 0, background: 'none', border: 'none', fontSize: '24px', color: '#fff', cursor: 'pointer' }}>X</button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default ProductsPage;
