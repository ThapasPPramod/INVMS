import React, { useState, useEffect } from 'react';
import {Container, Tab, Tabs, Table, Button, Form} from 'react-bootstrap'
import axios from 'axios';
// import InventoryView from './inventory';


import Item from './item';

const baseUrl = "htttp://localhost:5000"

function AddItem() {
  const [formData, setFormData] = useState({name_:"",date_of_purchase:"",bill_number:"",supplier_address:"",quantity:"",rate:"",amount:"",colour:"",warranty_period:"",remarks:"",admin_id:"0",
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData)
    axios
      .post("http://localhost:5000/item/add",formData, config)
      .then((response) => {
        console.log(response);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while submitting the form.");
      });

      // alert(formData.name_ + ' was added!');
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
     console.log(event, event.target);
    setFormData(prevState => ({
      ...prevState,
      [name]: value
      
    }));
   console.log(formData);
  };

  
    return (
      <Form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} onSubmit={handleSubmit}>
        <label>Name :
          <input  type="text" name="name_" placeholder="Enter item name" onChange={handleChange} />
        </label><br/>
          <label>Purchase Date  :
          <input type="date" name="date_of_purchase" placeholder="dd-mm-yyyy" value={formData.date_of_purchase} onChange={handleChange} />
          </label><br/>
       <label>Bill Number :
          <input type="text" name="bill_number" placeholder="Enter bill number" value={formData.bill_number} onChange={handleChange} />
          </label><br/>
       <label>Supplier Address  : 
          <input type="text" name="supplier_address" placeholder="Enter supplier address" value={formData.supplier_address} onChange={handleChange} />
          </label><br/>
          <label>Quantity :
          <input type="text" name="quantity" placeholder="Enter quantity purchased" value={formData.quantity} onChange={handleChange} />
          </label><br/>
          <label>Rate :
          <input type="text" name="rate" placeholder="Enter rate(in Rs. /unit)" value={formData.rate} onChange={handleChange} />
          </label><br/>
          <label>Amount :
          <input type="text" name="amount" placeholder="Enter bill amount(in Rs.)" value={formData.amount} onChange={handleChange} />
          </label><br/>
          <label>Color  :
          <input type="text" name="colour" placeholder="Enter color" value={formData.colour} onChange={handleChange} />
          </label><br/>
          <label>Warranty Period  :
          <input type="text" name="warranty_period" placeholder="Enter warranty period (if any)" value={formData.warranty_period} onChange={handleChange} />
          </label><br/>
          <label>Remarks  :
          <input type="text" name="remarks" placeholder="Enter remarks (if any)" value={formData.remarks} onChange={handleChange} />
          </label><br/>
        <Button variant="primary" type="submit">
          Submit and generate QR code
        </Button>
      </Form>
    );
  }

export default function ControlledTabsInv() {
  var [key, setKey] = useState('view');
  // var [data,setData] = useState([]);
  var [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/item/getAll');
        setItems(response.data);
        console.log(items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    if (key === 'view') {
      fetchData();
    }
  }, [key]);

if(!items){
  return <div>Loading...</div>;
}

  return (
    <Container>
        <p><h3><center>INVENTORY</center></h3></p>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="view" title="View" >
          
        <Container fluid >
      <Table striped expand='lg' variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            {/* <th>Qrcode</th> */}
          </tr>
        </thead>

         <tbody>
        {items.map( (item) => (
          <>
          <tr>
            <td>{item.id}</td><td>{<Item item={item} />}</td>
          </tr>
          </>
        ))}

        </tbody> 
      </Table>
    </Container>
        </Tab>
        <Tab eventKey="add" title="Add">
            <AddItem />
        </Tab>

        </Tabs>
    </Container>
  )
}