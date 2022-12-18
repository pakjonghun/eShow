import axios, { AxiosInstance } from 'axios';
import { baseURL } from './constants';
import { Products } from './types';

export class Clients {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL,
    });
  }

  getProducts(params: any) {
    return this.httpClient.get<Products>('data/products.json', { params });
  }
}

export default Clients;
