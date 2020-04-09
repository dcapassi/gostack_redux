import React from "react";
import { Link } from "react-router-dom";
import { Container, Cart } from "./styles";
import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/images/logo.svg";

import { connect } from "react-redux";

function Header({ cart }) {
  const countItems = cart.reduce((result, item) => {
    return item.amount + result;
  }, 0);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{countItems} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

const mapState = state => ({
  cart: state.cart
});

export default connect(mapState)(Header);
