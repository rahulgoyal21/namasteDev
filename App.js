import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurant container
 *      - Restaurant card
 *          - img
 *          - Name, star rating, cuisines
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
          alt='Food logo'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div
      className='res-card'
      style={{
        backgroundColor: '#f0f0f0'
      }}
    >
      <img
        className='res-logo'
        src='https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-filipino-cuisine-restaurant-dishes-vector-round-frame-png-image_5690109.png'
      />
      <h3>Meghna foods</h3>
      <h3>Indian</h3>
      <h3>38 minutes</h3>
      <h3>4.4 stars</h3>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
