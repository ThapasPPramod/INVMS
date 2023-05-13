import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Container, Table} from 'react-bootstrap';


function ItemDetail(){
    const {item_id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try{
          const response = await axios.get(`http://localhost:5000/item/${item_id}`);
          setData(response.data);
          console.log(data);
          } catch (error){
            console.log(error)
          }
        };
    
    
        fetchData();
      }, [item_id]);
    
    // const [activeKey, setActiveKey] = useState('home');
return (
<>
<h3><center>{data.name_}</center></h3><br/>
<Container fluid>
<Table striped expand='lg' variant='dark'>
  <thead>
    <tr>
      <th>Serial No.</th>
      <th>Date of Purchase</th>
      <th>Bill Number</th>
      <th>Quantity</th>
      <th>Rate</th>
      <th>Amount</th>
      {data.warranty_period && <th>Warranty Period</th>}
      {data.colour && <th>Colour</th>}
      {data.supplier_address && <th>Supplier Address</th>}
      <th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.id}</td>
      <td>{data.date_of_purchase}</td>
      <td>{data.bill_number}</td>
      <td>{data.quantity}</td>
      <td>{data.rate}</td>
      <td>{data.amount}</td>
      {data.warranty_period && <td>{data.warranty_period}</td>}
      {data.colour && <td>{data.colour}</td>}
      {data.supplier_address && <td>{data.supplier_address}</td>}
      <td>{data.remarks}</td>
    </tr>
  </tbody>
</Table>
</Container>
{/* {typeof(item_id)} */}
</>
);
}
export default ItemDetail;