import React, {useState} from "react";
import InputCheck from "../../InputCheck/InputCheck";

import style from "./TableItems.module.css";


 const TableItem = ({product, productItems, setproductItem, id}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [item, setItem] = useState({
    title: '',
    quantity: '',
    price: "",
    id: id
  });
  const [error, setError] = useState('');


  const onDeleteItem = (e) => {
    const sortedItems = productItems.filter((item) => {
      if (item.id === id) return false;
      return true
    })
    setproductItem(sortedItems)
  };

  const onAddItem = (e) => {
    e.preventDefault();
    const editedItems = productItems.map((stuff) => {
      if (stuff.id === id) {
        return item;
      }
      return stuff;
    })
    setproductItem(editedItems)
  };

  return (
    <div className={style.tableItemsWrapper}>
      {!isEdit ?
        <div className={style.tableItems}>
          <h3>{product.title}</h3>
          <h3>{product.quantity}шт.</h3>
          <h3>{product.price}$</h3>
        </div> :
      <InputCheck
        productItems={productItems}
        setItem={setItem} error={error}
        setError={setError}
        onAddItem={onAddItem}
        item={item}
        isEdit={isEdit}
        />

      }
      <div className={style.editingBlock}>
        <button className={style.deleteItem} onClick={onDeleteItem}>Удалить</button>
        {!isEdit 
        ? <button className={style.editItem} onClick={() => setIsEdit(true)}>Изменить</button>
        : <div></div>
        }
      </div>
    </div>
  );
};

export default TableItem
