import React from "react";
import { Container, ProductTable, Total } from "./styles.js";
import { connect } from "react-redux";
import { formatPrice } from "../../util/format";

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from "react-icons/md";

function Cart({ cart, total, dispatch }) {
  console.log(cart);
  function handleRemove(product) {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: product.id
    });
  }
  function subtract(product) {
    dispatch({
      type: "SUBTRACT",
      id: product.id
    });
  }
  function sum(product) {
    dispatch({
      type: "SUM",
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
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => subtract(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => sum(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
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
          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapState = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price)
  })),
  total: state.cart.reduce((result, item) => {
    return item.amount * item.price + result;
  }, 0)
});

export default connect(mapState)(Cart);
