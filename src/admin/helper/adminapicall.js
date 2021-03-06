// 
import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// create product


export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        
        Authorization: `Bearer ${token}`
      },
      body: product
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

 // get aproduct
  export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
 // get All product
 
 export const getAllProducts = () => {
    return fetch(`${API}/product`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
  };
  
  // update a product 
  export const updateProduct = (productId,userId, token,product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
      
        Authorization: `Bearer ${token}`
      },
      body: product
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  

  // delete product

  export const deleteProduct = (productId, userId, token) => {
    console.log("ending",productId," -- ",userId,"--- ",token )
    return fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };


  export const getCategories = () => {
    return fetch(`${API}/categories`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const deleteCategory = (categoryId, userId, token) => {
       
    return fetch(`${API}/category/${categoryId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const updateCategory = (categoryId,userId, token,category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };


  export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  //order all
   export const getAllOrders = (userId) => {
    return fetch(`${API}/order/all/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
  };
  
   export const getOrderStatus = (userId) => {
    return fetch(`${API}/order/status/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
  };
  
  
  
   export const updateOrderStatus = (orderId,userId, token,order) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(order)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  