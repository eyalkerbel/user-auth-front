export const validatePassword = (password: string): string => {
  if (!password) {
    return 'Field is mandatory'
  }
  const regex = /^.{8,}$/;
  if (!regex.test(password)) {
    return 'Password must meet complexity requirements'
  }
  return ''
};

export const validateName = (name: string): string => {
  if (!name) {
    return 'Field is mandatory'
  }
  if (name.length <= 2) {
    return "Field must be more than two letters";
  }
  return ''
};


export const validateEmail = (email: string): string => {
  if (!email) {
    return 'Field is mandatory'
  }
  if (!(/^\S+@\S+\.\S+$/.test(email))) {
    return "Invalid email format";
  }
  return ''
};

