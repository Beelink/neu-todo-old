enum UserRoleEnum {
  user = "USER",
  admin = "ADMIN",
}

interface User {
  id: string;
  username: string;
  email: string;
  role: UserRoleEnum;
  password: string;
  accessToken?: string;
  image: string;
}

export default User;
