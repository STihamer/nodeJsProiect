export const formatResponse = (data) => {
  let responseData = {
    data: data ?? null,
  };
  return responseData;
};

export const formatErrorResponse = (text) => {
  let responseData = {
    error: text,
  };
  return responseData;
};
