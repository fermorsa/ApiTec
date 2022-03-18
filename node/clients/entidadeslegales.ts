import {
	InstanceOptions,
	IOContext,
	ExternalClient,
	IOResponse
} from "@vtex/api";


const routes = {
    search : (querySearch: String) =>
        // `/api/dataentities/CL/search?_fields=firstName,lastName,nivel,perfilAlumno,perfilActivo,campusInscrito,matricula,perfilActivo,cargoAEstadoDeCuenta&_where=userId = ${querySearch}`
        
        // `/api/dataentities/entidadesleg/search?_fields=id&_where=seller=${querySearch}&_schema=v1`

        `/api/dataentities/entidadesleg/search?_where=seller=${querySearch}&_schema=v1&_fields=_all`

        // `/api/dataentities/entidadesleg/search?seller = ${querySearch}&_schema=v0`  
        // `/api/dataentities/entidadesleg/search?seller=${querySearch}&_schema=v0`  
      
}

const FOUR_SECONDS = 50 * 1000;

export default class EntidadesLegales extends ExternalClient {
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

    public async search(querySearch: String, headers:object): Promise<IOResponse<string>>{
        let url = routes.search(querySearch);
        console.log('search: ', url)
        let response : IOResponse<any> = await this.http.getRaw(url,{
            headers : headers
        });
        return { data : response.data, headers: response.headers, status: response.status};
    }
}


