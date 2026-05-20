const API_URL = "http://127.0.0.1:5000/products";

export async function getProducts() {
  const response = await fetch(API_URL);

  const data = await response.json();

  return data;
}
