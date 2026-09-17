import api from "./axios";

export const analyzeProduct = async (file) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await api.post("/api/ocr", formData);

  return response.data;
};