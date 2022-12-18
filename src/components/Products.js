import React ,{useState,useEffect}from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Products() {
    const [products,setProducts] = useState([]);

    const getAllData = async()=>{
        await fetch("http://localhost:5000/all-products")
            .then(result => {
                return result.json()
            })
            .then(x =>{
                setProducts(x)
            })
        }
        useEffect(()=>{
                getAllData()
            },[])
            
return (
    <section className='products-section' id='products'>
        <Container>
            <h1 className='text-center'>Featured Product</h1>
            <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
   {
    products.map((product)=>{
        return(
            <tr>
                <th scope="row">{product._id}</th>
                <td>{product.tittle}</td>
                <td>{product.description}</td>
                <td>{product.price} LE</td>
        </tr>
        )
      })
    }
  </tbody>
</table>
        </Container>
    </section>
);
}

export default Products;
