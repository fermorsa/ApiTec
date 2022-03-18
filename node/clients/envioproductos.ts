import {
	InstanceOptions,
	IOContext,
	ExternalClient,
	IOResponse
} from "@vtex/api";


const routes = {
    enviop : () =>
        // `/api/dataentities/CL/search?_fields=firstName,lastName,nivel,perfilAlumno,perfilActivo,campusInscrito,matricula,perfilActivo,cargoAEstadoDeCuenta&_where=userId = ${querySearch}`
        // `/api/dataentities/entidadesleg/search?_fields=id&_where=seller=&_schema=v0`
        
        // `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescart/documents?_schema=v0`

        // `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescartprueba/documents?_schema=v1`

        `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescartf/documents?_schema=v0`
 
      
}

const FOUR_SECONDS = 50 * 1000;

export default class EnvioProductos extends ExternalClient {
	public constructor(ctx: IOContext, options?: InstanceOptions) {
        super(`http://${ctx.account}.vtexcommercestable.com.br`,ctx, {
            ...options,
            retries: 2,
            headers: {
            ...(options && options.headers),
            },
            timeout: FOUR_SECONDS,
        });
    }

    public async enviop(data: any, headers: object): Promise<IOResponse<string>>{
        let url = routes.enviop();
        console.log('enviop: ', url)
        let response: IOResponse<any> = await this.http.postRaw(url, data,{
            headers : headers
        });
        return { data : response.data, headers: response.headers, status: response.status};
    }
}


