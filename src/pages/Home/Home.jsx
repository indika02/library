import React from 'react';
import Header from '../../components/Header/Header';
import Search from '../../components/filter/Search';
import Book from '../../components/books/Book';
import Container from 'react-bootstrap/esm/Container';
import './home.css';

const Home = () => {
  return (
    <Container>
    <div className='homeContainer'>
      <Header/>
      <Book/>
    </div>
    </Container>
  );
}

export default Home;
