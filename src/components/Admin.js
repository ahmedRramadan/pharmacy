import React ,{useState,useEffect}from 'react';
import Swal from 'sweetalert2'

function Admin() {
    const [products,setProducts] = useState([]);
    const [tittle,setTittle] = useState()
    const [description,setDescription] = useState()
    const [body,setBody] = useState()
    const addData =  async()=>{
        await fetch("http://localhost:5000/all-products",
        {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
            body: JSON.stringify({tittle:tittle,description:description,body:body}) 
        }
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addData().then(()=>{
            Swal.fire(
                {
                    icon: 'success',
                    title: `${tittle} product has been added`,
                    timer:3000,
                    showConfirmButton:false
                }
            )
        })
        .then(()=>{
            window.location.reload(false)
        })
        .catch(
            console.log('connection error')
        )
    }
    //get all data
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


    //delete data 
    const handleDelete = (product)=>{
        Swal.fire({
          icon:'warning',
          title:`are you sure to delete ${product.tittle}`,
          showCancelButton: true
        }
        ).then((data)=>{
          if(data.isConfirmed){
            fetch(`http://localhost:5000/all-products/${product._id}`,
            {
                method:'DELETE'
            }
            ).then(getAllData())
          }
        })
      }        
return (
    <>
        <div className='admin-page p-5'>
            <div className='container'>
                <h1 className='text-center'>add product</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div class="form-group d-flex align-items-center">
                    <label for="exampleInputEmail1" className='me-5 h3'>enter product name</label>
                    <input type="text" classNameNAme="form-control" id="exampleInputEmail1"  placeholder="product name"  onChange={(e)=>setTittle(e.target.value)}/>
                </div>
                <div class="form-group d-flex align-items-center">
                    <label for="exampleInputEmail1" className='me-5 h3'>enter product description</label>
                    <textarea type="text" classNameNAme="form-control" id="exampleInputEmail1"  placeholder="product description" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div class="form-group d-flex align-items-center">
                    <label for="exampleInputEmail1" className='me-5 h3'>enter product price</label>
                    <input type="text" classNameNAme="form-control" id="exampleInputEmail1"  placeholder="product price" onChange={(e)=>setBody(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-5">Add product</button>
            </form>
            <table class="table table-striped table-dark mt-5">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">description</th>
                <th scope="col">price</th>
                <th>delete product</th>
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
                            <td><button className='btn btn-danger' onClick={()=>handleDelete(product)}>delete</button></td>
                    </tr>
                    )
                })
                }
            </tbody>
            </table>
            </div>
        </div>
    </>
);
}

export default Admin;
