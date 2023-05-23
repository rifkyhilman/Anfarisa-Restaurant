import Home from '../views/pages/list-restaurant';
import Favorite from '../views/pages/favorite-restaurant';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
