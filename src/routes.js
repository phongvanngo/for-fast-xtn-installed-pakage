import React from 'react';
import PostManager from './Pages/PostsManagerPage/PostsManager'
import ProductManager from './Pages/Productpage/Productpage'
import Account from './Pages/Accountpage/Accountpage'


const routes = [
  {
    path: '/product',
    exact: true,
    main: () => <ProductManager />
  },
  {
    path: '/account',
    exact: true,
    main: () => <Account />
  },
  {
    path: '/team',
    exact: true,
    // main: () => <Contact />
  },
  {
    path: '/feedback',
    exact: false,
    //main: ({match}) => <Products match={match} />
  },
  {
    path: '/post',
    exact: false,
    main: () => <PostManager />
  }

]

export default routes;