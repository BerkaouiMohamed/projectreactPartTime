import axios from 'axios';
import { useContext, useState } from 'react';
import Form from'react-bootstrap/Form'; 
import { ToastContainer, toast } from 'react-toastify';
import { ProductStore, productsActions } from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [product,setProduct]=useState({})

    const navigate=useNavigate()

    const { products, dispatch }=useContext(ProductStore)
    const hundleAdd=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/products",product).then(res=>{console.log(res.data)
    toast.success("product added")
        dispatch(productsActions.addProducts(res.data))
    navigate("/")
    }).catch(e=>toast.error('something went wrong'))


    }
  return (
    <div style={{width:"50%",margin:"auto",background:"wheat",padding:'10%'}}>
    <Form onSubmit={hundleAdd} >
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>titles</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="name@example.com" onChange={(e)=>setProduct({...product,price:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>setProduct({...product,description:e.target.value})        }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>setProduct({...product,image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="submit" placeholder="name@example.com" />
      </Form.Group>
    </Form>
    </div>
  )
}

export default AddProduct
