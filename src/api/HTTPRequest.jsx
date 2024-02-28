import axios from "axios";

const HTTPRequest = async (uri, method, body) => {
  try {
    const response = await axios({
      method: method,
      url: uri,
      data: body,
    });
    return response;
  } catch (error) {
    console.error("Error in HTTP request:", error);
    throw error;
  }
};

export { HTTPRequest };
