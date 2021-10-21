import axios from "axios";
export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
