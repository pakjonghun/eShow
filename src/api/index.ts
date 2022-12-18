import { Clients } from './clients';

export class Apis {
  constructor(private clients: Clients) {
    this.clients = clients;
  }

  products() {
    return this.clients.getProducts({}).then((res) => res.data);
  }
}

export default Apis;
