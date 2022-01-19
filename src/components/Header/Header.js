import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "../Reducer/StateProvider"
function Header() {
    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();
        return(
            <div className="header">
                <Link to = "/">
                    {/*the top left logo CHANGE LOGO*/}
                    <h2 className="header-logo">Store</h2>
                 </Link>
            {/*the Search box*/}
            <div className = "header-search">
                <input className = "header_searchInput" type = "text"/>
                <SearchIcon className = "header-searchIcon"></SearchIcon>
            </div>
            <div className = "header-nav">
                <div className = "header-option">
                    <span className = "header-optionLineOne">
                        Hello Guest
                    </span>
                </div>
                <Link to = "/checkout">
                    <div className = "header-optionBasket">
                        <ShoppingBasketIcon/>
                        <span className = "header-optionLineTwo header-basketCount"> 
                        {basket? basket.length:0} 
                        </span>
                    </div>
                </Link>
            </div>
            </div>
        )
}

export default Header;