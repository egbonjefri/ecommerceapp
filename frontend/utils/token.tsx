export const storeTokenInLocalStorage = (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  };
  
 export const getTokenFromLocalStorage = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  };


  export const storeUserInLocalStorage = (user: any)=>{
    const userInfo = JSON.stringify(user);
    localStorage.setItem('user', userInfo);
  }

  export const getUserFromLocalStorage = (): any => {
    try {
      const serializedUser = localStorage.getItem('user');
      if (serializedUser) {
        const user = JSON.parse(serializedUser);
        return user;
      }
    } catch (error) {
      console.error('Error retrieving user from local storage:', error);
    }
    return null;
  }
