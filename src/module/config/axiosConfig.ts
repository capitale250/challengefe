import axios from "axios";


export const instance= axios.create({
  baseURL: "http://localhost:8001",
  responseType: 'json',

});
const successResponse = (response: { data: any; }) => {
  return response.data;
};

const failResponse = (error: any) => {
  return Promise.reject(error);
};

const Request = (options: any) => instance(options).then(successResponse).catch(failResponse);

export default Request;