import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import ProductList from "./product-list/ProductList.js";
import products from "./products";
import ShoppingCart from './shopping-cart/ShoppingCart';
//hi
function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (product, quantity) => { 
    console.log(product, quantity); 
      // Fill in the code: clone the current selectedItems state const newSelectedItems = ... 
      const newSelectedItems = [...selectedItems];

      for (let i = 0; i < newSelectedItems.length; i++) { 
      // for an existing product, update the quantity instead of appending 
        
        if (newSelectedItems[i].product.id === product.id) { 
        // Fill in the code: Clone the object state 
        newSelectedItems[i] = {...newSelectedItems[i]};

        newSelectedItems[i].quantity += parseInt(quantity); 
        setSelectedItems(newSelectedItems); 
        console.log(newSelectedItems);
        return; 
      } 
    } 

    const newItem = { 
    product: product, 
    quantity: parseInt(quantity), 
    }; 
    newSelectedItems.push(newItem);
    setSelectedItems(newSelectedItems);
    console.log(newSelectedItems);
    // Fill in the code: push the newItem to the newSelectedItems 
    // Fill in the code: set the newSelectedItems to the selectedItems state 
    };

    const removeFromCart = (selectedItem) => { 
      console.log("remove",selectedItem.product);
      console.log("remove2", selectedItem);
      // Fill in the code: filter the current state, drop the item with product.id === productId 
      const newSelectedItems = selectedItems.filter((item) =>{
        return item.product.id !== selectedItem.product.id;
      })
      setSelectedItems(newSelectedItems); 
    };
      
    return (
      <div>
          <Navbar bg="light">
            <Navbar.Brand href="#home">Myy Shopping Cart</Navbar.Brand>
          </Navbar>

          <Container fluid>
            <Row>
              <Col>
                <h2>Products</h2>
                <ProductList
                  ps={products}
                  addToCart ={addToCart}
                  />
              </Col>

              <Col>
              <h2>Shopping Cart</h2>
              <ShoppingCart
              selectedItems ={selectedItems}
              removeFromCart ={removeFromCart}
            />
              </Col>

            </Row>
          </Container>

      </div>
    );
  }
export default App;
