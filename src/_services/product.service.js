// return the user data from the session storage
export const getProductDetails = () => {
  return null;
};

// GETTING ALL THE PRODUCTS
export const productsList = async () => {
  const apiUrl = global.config.apiBaseURL.url;
  const companyID = global.config.apiBaseURL.companyId;

  return await fetch(apiUrl + "/Product/GetProducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyId: companyID,
      pageNumber: 1,
      rowsPage: 5,
      categories: "",
      subcategories: "",
      productName: "",
      priceMin: 0,
      priceMax: 0,
      isGroup: 0,
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.completed) {
        alert(responseData.message);
      }
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};

// set the product into favourite list
export const productFavourit = async (productID, productTrueOrFalse) => {
  const apiUrl = global.config.apiBaseURL.url;
  const user_Id = Number(sessionStorage.getItem("user_Id"));

  return await fetch(apiUrl + "/User/saveFavorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: user_Id,
      productId: productID,
      isFavorite: productTrueOrFalse,
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};

// GETTING ALL THE CATEGORIES FOR THE PRODUCTS
export const productCategoryList = async () => {
  const apiUrl = global.config.apiBaseURL.url;
  const companyID = global.config.apiBaseURL.companyId;

  return await fetch(apiUrl + "/Product/GetCategoriesAll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyId: companyID,
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};