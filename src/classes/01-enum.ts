enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES;
}

const yalmonte: User = {
  username: 'yalmonte',
  role: ROLES.ADMIN
}