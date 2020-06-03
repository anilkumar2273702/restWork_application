class Auth {
  constructor(){
    this.authanticated = false;
  }
  
  login(col){
    this.authanticated = true;
    col();
  }
  
  logout(col){
    this.authanticated = false;
    col();
  }
  
  isAuthanticated(){
    return this.authanticated;
  }
  

}

export default new Auth();
