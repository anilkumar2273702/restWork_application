// return the user data from the session storage
export const getUserDetails = () => {
  const userStr = sessionStorage.getItem("user_details");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("user_Id") || null;
};

// remove the token and user from the session storage
export const logout = () => {
  if(window.confirm("Are You sure to logout?")){
    sessionStorage.removeItem("user_Id");
    sessionStorage.removeItem("user_Name");
    sessionStorage.removeItem("user_details");
  }
};

// set the token and user from the session storage
export const login = async (username, password) => {
  const apiUrl = global.config.apiBaseURL.url;
  const companyID = global.config.apiBaseURL.companyId;

  return await fetch(apiUrl + "/User/authenticateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyId: companyID,
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      if(!responseData.completed){
        alert(responseData.message);
      }else{
        let userDetails = responseData.profileUser;
        sessionStorage.setItem('user_Id', userDetails.userId);
        sessionStorage.setItem('user_Name', userDetails.username);
        sessionStorage.setItem('user_details', JSON.stringify(userDetails));
      }
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};

// USING METHOD TO RECOVER PASSWORD BY EMAIL
export const recoverPassword = async (email) => {
  const apiUrl = global.config.apiBaseURL.url;
  const companyID = global.config.apiBaseURL.companyId;

  return await fetch(apiUrl + "/User/recoverPassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyId: companyID,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      
      if(!responseData.completed){
        alert(responseData.message);
      }
      
      return responseData;
    })
    .catch((error) => {
      return error;
    });
};

// set the token and user from the session storage
export const register = (fieldsState) => {
  const apiUrl = global.config.apiBaseURL.url;
  const companyID = global.config.apiBaseURL.companyId;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      companyId: companyID,
      username: fieldsState.username,
      password: fieldsState.password,
      firstName: fieldsState.firstName,
      lastName: fieldsState.lastName,
      email: fieldsState.email,
      phoneNumber: fieldsState.phoneNumber,
      city: fieldsState.city,
      address: fieldsState.address,
    }),
  };

  return fetch(apiUrl + "/User/createUser", requestOptions)
    .then(handleResponse)
    .then((responseData) => {
      if(!responseData.completed){
        alert(responseData.message);
      }else{
        alert(responseData.message);
      }
      return responseData;
    });
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
