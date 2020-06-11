// return the user data from the session storage
export const getProductDetails = () => {
  return null;
};

// GETTING ALL THE PRODUCTS
export const productsList = async (filteredData) => {
  const apiUrl = global.config.apiBaseURL.url;
  const companyID = global.config.apiBaseURL.companyId;

  console.log("FilterData --", filteredData);

  return await fetch(apiUrl + "/Product/GetProducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyId: companyID,
      pageNumber: filteredData.pageNumber,
      rowsPage: filteredData.rowsPage,
      categories: filteredData.categories,
      subcategories: filteredData.subcategories,
      productName: filteredData.productName,
      priceMin: filteredData.priceMin,
      priceMax: filteredData.priceMax,
      isGroup: filteredData.isGroup,
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