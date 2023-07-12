// instead of writing this code in App.tsx, we creates a config folder and this File, to seperate/organize the code

// "any" means routes will be any data type (see below)
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';

// Line below is typescript javascript does not use interface, YOU MUST be specifi as to what type of data will be passed into routes (line 16..). interface helps with that otherwise it could get confused about integer or string (5 + '5' = 55 ). You can use the word 'any' TEMPORARILY when your first setting up code however it should be writtin like (line 17..)
interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

// const routes: any = [
    const routes: RouteType [] = [
    {
      path: "", //If there's no path meaning an empty string ("")then it should go to the home page
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard", //If it has a path like 'Dashboard' it should go to Dashboard
      component: Dashboard,
      name: "Dashboard",
      protected: true, //We want the dashboard to be protected
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    }
];

export default routes