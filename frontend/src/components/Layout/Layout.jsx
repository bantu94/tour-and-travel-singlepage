import React from 'react';
import Routers from '../../router/Routers.js';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}

export default Layout