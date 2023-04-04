import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Book from '../../components/books/Book';
import SearchAppBar from '../../components/search/Search';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

 function Home() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
          <SearchAppBar/>
        </Box>
        {/* <Box gridColumn="span 12">
          <Item>Header</Item>
        </Box> */}
        <Box gridColumn="span 12">
         <Book/>
        </Box>
        <Box gridColumn="span 12">
          <h1>Anncoucement</h1>
        </Box>
        <Box gridColumn="span 12">
          <h1>Footer</h1>
        </Box>
    </Box>
    </Box>
  );
}

export default Home;
