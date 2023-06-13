import axios from "axios";

const API_URL = "https://dama-server-vercel.vercel.app/api/purchasesHistory/";

// export const updateStockItem = async (stockItem: StockItem) => {
//     const response = await axios.put(API_URL + `update/${stockItem.id}`, { stockItem });
//   return response.data;;
//   };

export const addTransaction = async (itemName: string, date: string, amount: number) => {
  const response = await axios.post(API_URL + `post`, { itemName, date, amount });
  return response.data;
};


// export const addTransaction = (amount: Number, date: String, discription: String, catagory: String, type: String, userId: String) => {
//   return axios.put(API_URL + `addTransaction/${userId}`, {amount, date,discription, catagory, type 
//   }).then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }

//     return response.data;
//   });;
// };

