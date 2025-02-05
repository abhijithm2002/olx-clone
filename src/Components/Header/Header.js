import React, { useContext,useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { getAuth, signOut } from "firebase/auth";

function Header() {
 
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  // const { firestore } = useContext(FirebaseContext)
//ddd
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" >
          
        <Link to={'/'}><OlxLogo></OlxLogo></Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span className="sellText">{user ?  user.displayName : <Link to={'/login'}>Login</Link>} </span>
          <hr />  
        </div>
       
        {user && <span onClick={() => {
          const auth = getAuth();
          signOut(auth).then(() => {
            navigate('/login')
          }).catch((error) => {
            console.log(error.message)
          });
        }}  >Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to={'/create'}>
              <span className="sellText">SELL</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
