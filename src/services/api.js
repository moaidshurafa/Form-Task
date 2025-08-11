import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Users fetched:", response.data); // هنا طباعه البيانات

    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    toast.error("Error fetching users!");
  }
};

const addUsers = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    toast.success("User added successfully!");
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    toast.error("Error adding user!");
  }
};

export { getUsers, addUsers };
