import React from 'react';
import PostManager from './Pages/PostsManagerPage/PostsManager'


const routes = [
  {
    path: '/',
    exact: true,
    //main: () => <Home />
  },
  {
    path: '/',
    exact: true,
    //main: () => <About />
  },
  {
    path: '/Contact',
    exact: true,
    // main: () => <Contact />
  },
  {
    path: '/Products',
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