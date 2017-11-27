const API = "https://newsapi.org/v2";
const apiKey = "5df48f0ee1184466b3bd5a825d888184";
const generateUrl = (type, param) => {
  return `${API}/${type}?${param}&apiKey=${apiKey}`;
};

export default generateUrl;
