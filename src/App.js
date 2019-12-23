import React from 'react';
import './App.css';
import WithBookstoreService from './components/hoc/with-bookstore-service';
import Header from './components/header/header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page';
import CartPage from './components/pages/cart-page';
import ShoppingCartTable from './components/shopping-cart-table/shopping-cart-table';


const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks() )
  return (
    <div className="App">
      <Header total={200}/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
      <ShoppingCartTable />
    </div>
  );
}

export default WithBookstoreService()(App)
