import { IOClients } from '@vtex/api'
import EntidadesLegales from './entidadeslegales'
import EnvioProductos from './envioproductos'
import Productos from './productos'
import Status from './status'
import Borradoindivsub from './borradoindivsub'
import Borradogrupsub from './borradogrupsub'
import Actualizarindivsub from './actualizarcart'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get entidadeslegales() {
    return this.getOrSet('entidadeslegales', EntidadesLegales)
  }

  public get envioproductos() {
    return this.getOrSet('envioproductos', EnvioProductos)
  }

  public get productos(){
    return this.getOrSet('productos',Productos)
  }

  public get borradoindivsub() {
    return this.getOrSet('borradoindivsub', Borradoindivsub)
  }

  public get borradogrupsub() {
    return this.getOrSet('borradogrupsub', Borradogrupsub)
  }

  public get actualizarindivsub() {
    return this.getOrSet('actualizarindivsub', Actualizarindivsub)
  }

}
