import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

function ShoppingCart(props) {
    const totalAmount = () => {     
        let total = 0; 
        for(let selectedItem of props.selectedItems){ 
            total += subTotalAmount(selectedItem);
        } 
        return total; 
        }; 
        const subTotalAmount = (selectedItem) => { 
            const subtotal = selectedItem.quantity * selectedItem.product.price
            return subtotal;
        };
        
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Quantity </th>
                        <th>Subtotal </th>
                        <th> </th>
                        </tr>

                        {props.selectedItems.map((selectedItem) =>{
                        return (
                            <tr key={selectedItem.id}>
                            <td>{selectedItem.product.productName}</td>
                            <td>{selectedItem.product.price} </td>
                            <td>{selectedItem.quantity}</td>
                            <td> {subTotalAmount(selectedItem)}</td>
                            <td>  <Button onClick ={(event) => {
                                    event.preventDefault();
                                    console.log("hiiii", selectedItem)
                                    props.removeFromCart(selectedItem);
                            }} 
                            variant="danger">Remove</Button>{' '}</td>
                        </tr>
                        )
                        })}
                        <tr>
                        <th colSpan="3">Total Amount:</th>
                        <td colSpan="2">RM{totalAmount()}</td>
                        </tr>

                    </thead>
                </Table>
            </div>
        );
    }

export default ShoppingCart;