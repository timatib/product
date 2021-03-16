import React from "react";
import style from "./InputCheck.module.css";

 const InputCheck = ({
  productItems,
  setItem,
  error,
  setError,
  onAddItem,
  item,
  isEdit,
}) => {
  
  const onChange = (e) => {
    const inputName = e.target.dataset.item;
    let lastId;
    if (productItems.length === 0) {
      lastId = 1;
    } else {
      lastId = productItems[productItems.length - 1].id;
    }
    if (e.target.dataset.item === "title") {
      setItem((prevProductItem) => ({
        ...prevProductItem,
        [inputName]: e.target.value,
        id: lastId + 1,
      }));
    } else {
      if (
        typeof +e.target.value === "number" &&
        !Number.isNaN(+e.target.value)
      ) {
        setItem((prevProductItem) => ({
          ...prevProductItem,
          [inputName]: e.target.value,
          id: lastId + 1,
        }));
        if (error) setError("");
      } else {
        setError("Введите цифру");
      }
    }
  };

  return (
    <form className={style.blockForm} onSubmit={onAddItem}>
      <div className={style.wrapperInput}>
        <input
          onChange={onChange}
          type="text"
          data-item="title"
          placeholder="Введите название товара"
          value={item.title}
          maxLength={15}
        />
        <input
          onChange={onChange}
          type="text"
          data-item="quantity"
          placeholder="Введите количество"
          value={item.quantity}
          maxLength={5}
        />
        <input
          onChange={onChange}
          type="text"
          data-item="price"
          placeholder="Введите цену товара"
          value={item.price}
          maxLength={5}
        />
      </div>
      <div>{error}</div>
      {!isEdit ? (
        <button className={style.addItem} type="submit">
          Добавить
        </button>
      ) : (
        <button className={style.addItem} type="submit">
          Изменить
        </button>
      )}
    </form>
  );
};

export default InputCheck
