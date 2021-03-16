import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import TableItem from "./TableItems/TableItem";
import style from "./TableProduct.module.css";


const TableProduct = (props) => {
  const [productItems, setproductItem] = useState([
      
  ]);

const totalPrice = productItems.reduce((acc,item) => {
  return  acc+ (item.price * item.quantity)
},0);

  return (
    <div className={style.tableProductWrapper}>
      <div className={style.tableProduct}>
        <h1>Таблица товаров</h1>
        <div className={style.blockInput}>
          <AddItem productItems={productItems} setproductItem={setproductItem} />
        </div>
        <div className={style.ulWrapper}>
          <ul className={style.liWrapper}>
            <li>Название</li>
            <li>Количество</li>
            <li>Стоимость</li>
          </ul>
        </div>
        <div>
          {productItems.map((product) => {
            return <TableItem id={product.id}
              setproductItem={setproductItem}
              productItems={productItems}
              product={product}
              key={product.id}
            />;
          })}
        </div>
        <div>
          <h3 className={style.fullPrice}>Итоговая сумма: <span>{totalPrice}$</span></h3>
        </div>
      </div>
    </div>
  );
};

export default TableProduct;
