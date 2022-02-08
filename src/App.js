import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem'
import React, {useState} from 'react';

function App() {
  const products = [
    {
      price: 9999,
      name: "Iphone 11",
      quantity: 0,
    },
    {
      price: 1259,
      name: "oneplus",
      quantity: 0,
    },
  ]

  // let [productList, setProductList] = useState(products);
  let [productList , setProductList] = useState(products)
    let [totalAmount, setTotalAmount] = useState(0);


  const incrementQunatity = (index) =>{ 
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0){
       newProductList[index].quantity--;
       newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () =>{
    let newProductList =[...productList];
    newProductList.map((products)=>{
      products.quantity = 0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    console.log(newProductList)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem =(name,price) =>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
     setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <AddItem addItem={addItem}/>
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQunatity={incrementQunatity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
