
export const registerUser = async (type, value) => {
  const response = await fetch(
    `/api/${type.charAt(0).toLowerCase() + type.slice(1)}`,
    {
      method: "POST",
      body: JSON.stringify(value),
    }
  );
return response
};
