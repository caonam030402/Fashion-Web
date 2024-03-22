type Role = "User" | "Admin";

interface User {
  _id: string;
  roles: Role[];
  email: string;
  name?: string;
  date_of_birth?: string;
  avatar?: string;
  address?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}
