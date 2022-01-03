import Commerce from "@chec/commerce.js";
// creating new commerce store: new instance of "commerce" (to be imported else where) without full API (with CRUD methods)
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
