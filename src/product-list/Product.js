import React, { useState } from 'react';

import Table from "react-bootstrap/Table";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Product(props) {
  const [quantity, setQuantity] = useState();
  return (
    <Table>
      <thead>
        <tr>
          <th>ID </th>
          <td>{props.product.id}</td>
        </tr>

        <tr>
          <th>Name </th>
          <td>{props.product.productName}</td>
        </tr>

        <tr>
          <th>Price </th>
          <td>{props.product.price}</td>
        </tr>

        <tr>
          <th>Quantity </th>
          <td>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                // validate the inputs
                  props.addToCart(props.product, quantity);
                }
              }
            >
            <div>
              <InputGroup className="mb-3">
              <FormControl
                    value={quantity}
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                  />   <Button variant="primary" type="submit">Add to Cart</Button>{' '}</InputGroup>
            </div>
            </form>
          </td>
        </tr>
      </thead>
    </Table>
  );
}
export default Product;