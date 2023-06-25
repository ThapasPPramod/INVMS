import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import QrReader from 'qrcode.react'

// class QrScanner extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       delay: 100,
//       result: 'fhsjkjfjlksd',
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(data){
//     this.setState({
//       result: data,
//     })
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }

//     return(
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }
function QrScanner(){

  // const handleClick = () => {

  // };
  return(
    <>
    
    <Button variant='primary' href='./scan/:item_id' >Scan</Button>
    </>
  );
}
export default QrScanner;