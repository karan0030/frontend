import React ,{useState, useEffect} from 'react';
import Base from '../core/Base';
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../auth/helper';
import { getAllOrders,getOrderStatus,updateOrderStatus } from './helper/adminapicall';


const ManageOrders =()=>{
  
    const [orders, setOrder] = useState([])

    const {user,token} =isAuthenticated();

    const preLoad=()=>{
        getAllOrders(user._id).then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setOrder(data)
            }
        })
    }

    useEffect(()=>{
        preLoad()
    },[])

    

    return (
        <Base title="Welcome admin" description="Manage Orders here">
      <h2 className="mb-4">All Orders:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total {orders.length} Orders</h2>
           {    orders.map((order,index)=>{return (
                <div key={index} className="row text-center mb-2 ">
                    <div className="col-4">
                        <h3 className="text-white text-left">{order.transaction_id}</h3>
                    </div>
					 <div className="col-4">
                        <h3 className="text-white text-left">{order.user._id}</h3>
                    </div>
					<div className="col-4">
                        <h3 className="text-white text-left">{order.status}</h3>
                    </div>
					 <div className="col-4">
                        <h3 className="text-white text-left">{order.createdAt}</h3>
                    </div>
                    
                </div>)})}
        </div>
      </div>
    </Base>
    )

}

 export default ManageOrders;