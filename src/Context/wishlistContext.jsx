// import { createContext, useContext, useEffect, useState } from "react";
// import { tokenContext } from "./tokenContext";
// import axios from "axios";

// export const WishContext = createContext();

// export default function  WishContextProvider({ children }) {
//   const { token } = useContext(tokenContext);
//   const [wishDetails, setWishDetails] = useState(null);
//   const [wishId, setWishId] = useState("");

//   useEffect(() => {
//     if (token) getWishlist();
//   }, [token]);

//   const API_URL = `https://ecommerce.routemisr.com/api/v1/wishlist`;
//   const headers = {
//     Authorization: `Bearer ${token}`, // FIXED HEADERS
//   };

//   async function addToWish(productId) {
//     const { data } = await axios.post(API_URL, { productId }, { headers });
//     return data;
//   }

//   async function getWishlist() {
//     const { data } = await axios.get(API_URL, { headers });
//     setWishId(data.wishId);
//     setWishDetails(data);
//     return data;
//   }

//   async function removeProduct(id) {
//     const { data } = await axios.delete(`${API_URL}/${id}`, { headers });
//     setWishDetails(data);
//     return data;
//   }

//   return (
//     <WishContext.Provider value={{ addToWish, getWishlist, wishDetails, removeProduct }}>
//       {children}
//     </WishContext.Provider>
//   );
// }
import { createContext, useContext, useEffect, useState } from "react";


export const WishListContext = createContext();





export default function WishListProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
  
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return savedWishlist;
  });

  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const toggleWishlist = (product) => {
    if (!product || !product.id) {
      console.error( product);
      return;
    }

    setWishlist((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some((item) => item.id === product.id);

      if (isProductInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <WishListContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishListContext.Provider>
  );
}


export const useWishlist = () => useContext(WishListContext);
