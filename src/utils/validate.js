export const validate=(email,password)=>{
const isemailId= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  if (!isemailId) {
    throw new Error("Invalid Email ID");
  }
  if (!isPassword) {
    throw new Error("Invalid Password");
  }

  return null;
};
