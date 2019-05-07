import Home from '../pages/Home';
import Meeting from '../pages/Meeting';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/registration',
    component: Registration,
    exact: true
  },
  {
    path: '/meeting/:id?',
    component: Meeting,
    exact: true
  }
];

export default routes;
