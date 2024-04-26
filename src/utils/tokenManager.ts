export class TokenManager {
  set(token: string) {
    localStorage.setItem('volunteers-bridge-token', token);
  }
  
  get() {
    return localStorage.getItem('volunteers-bridge-token');
  }
}

/* example of usage:
   
   TokenManager.set('our token');    here we are setting a token
   TokenManager.get()                here we are getting the token
   
   
   You don't need to pass a key for token. Just call "set" and "get" methods :)
*/