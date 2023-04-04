import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        sx={{ height: 100 }}
        image="../images/b1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book1
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}
