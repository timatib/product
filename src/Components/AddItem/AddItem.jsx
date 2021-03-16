import React, {useState} from "react";
import InputCheck from "../InputCheck/InputCheck";


 const AddItem = ({setproductItem, productItems}) => {
  const [item, setItem] = useState({
    title: '',
    quantity: '',
    price: "",
    id: null
  });
  const [error, setError] = useState('');
  
  const onAddItem = (e) => {
    e.preventDefault();
    if (!item.id || !item.title || !item.price) return;
    setproductItem((prevProducts) => (
      [...prevProducts, item]
    ))
    setItem((prevProductItem) => (
      {
        ...prevProductItem,
        title: '',
        quantity: '',
        price: ''
      }
    ))
  };

  return    <InputCheck
    productItems={productItems}
    setItem={setItem} error={error}
    setError={setError}
    onAddItem={onAddItem}
    item={item}/>
};

export default AddItem

