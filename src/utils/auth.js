export const isAuthenticated = () => {
  // Simple check - you can make this more sophisticated
  return sessionStorage.getItem('isLoggedIn') === 'true';
};

export const login = () => {
  sessionStorage.setItem('isLoggedIn', 'true');
};

export const logout = () => {
  sessionStorage.removeItem('isLoggedIn');
};