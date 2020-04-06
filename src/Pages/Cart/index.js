import React from "react";
import { Container, ProductTable, Total } from "./styles.js";
import { connect } from "react-redux";

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from "react-icons/md";

function Cart({ cart, dispatch }) {
  function handleRemove(product) {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: product.id
    });
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        {cart.map(product => (
          <tbody>
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.price * product.amount}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={20}
                    color="#7159c1"
                    onClick={() => handleRemove(product)}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </ProductTable>
      <footer>
        <button type="button"> Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapState = state => ({
  cart: state.cart
});

export default connect(mapState)(Cart);
