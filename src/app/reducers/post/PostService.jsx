import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';
import axiosApiInstance from '../../utils/api';

const get = async (query = '') => {
  const response = await axiosApiInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/courses${query}`);
  return response.data;
};
const postService = {
  get,
};

export default postService;
