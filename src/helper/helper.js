//
const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

//Search-Products
const searchProducts = (products, search) => {
  //سرچ نکردن (خالی)
  if (!search) return products;
  //سرچ کردن
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

//Filter-Products
const filterProducts = (products, category) => {
  //فیلتر نکردن
  if (!category) return products;
  //فیلتر کردن
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

//حذف کردن کوئری های اضافه (search , All)
const createQueryObject = (currenQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currenQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currenQuery;
    return rest;
  }
  return { ...currenQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );

  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const ProductQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index == -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  ProductQuantity,
};
