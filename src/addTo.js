const findProduct = (productData, id) => {
  const getProduct = productData.filter((p) => p.id === id);
  return getProduct;
};

const handleTotal = (cart, setTotal) => {
  const allPrices = cart.map((p) => p.price);
  const totalToPay = allPrices
    .reduce((acc, actual) => acc + actual, 0)
    .toFixed(2);
  if (setTotal !== undefined) {
    setTotal(totalToPay);
  }
  return totalToPay;
};

const addToList = (id, list, productData, saveProduct) => {
  const product = findProduct(productData, id);
  const isProductInList = list.some((p) => p.id === product[0].id);

  if (!isProductInList) {
    const newProducts = [...list, product[0]];
    saveProduct(newProducts);
  }
};

const removeItemFromList = (id, list, saveProduct) => {
  const productIndex = list.findIndex((p) => p.id === id);
  const newList = [...list];
  newList.splice(productIndex, 1);
  saveProduct(newList);
};

const createOrder = (products, setOrders, orders) => {
  const getTodayDate = new Date();
  const day = getTodayDate.getDate();
  const month = getTodayDate.getMonth();
  const year = getTodayDate.getFullYear();
  const dateOrder = `${day}.${month}.${year}`;

  const newOrder = {
    date: dateOrder,
    products: products,
  };
  const allOrders = [...orders, newOrder];
  setOrders(allOrders);
};
export { handleTotal, addToList, removeItemFromList, createOrder };
