// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.log("An error occurred >>>", error));
//   }, []);

//   return [data];
// };

// export default useFetch;

import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => alert(error));
  }, []);

  return [data];
};

export default useFetch;
