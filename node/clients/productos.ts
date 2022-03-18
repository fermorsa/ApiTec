import {
	InstanceOptions,
	IOContext,
	ExternalClient,
	IOResponse
} from "@vtex/api";


const routes = {
    getProducts : (querySearch: String) =>

        //`/api/dataentities/entidadesleg/search?_fields=id&_where=seller=${querySearch}&_schema=v0`
       
        // `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescart/search?_fields=idsku&_where=idcliente=${querySearch}&_schema=v0`

        // `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescartf/search?_fields=idsku&_where=idcliente=${querySearch}&_schema=v0`
        
        `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescartf/search?_fields=_all&_where=idcliente=${querySearch}&_schema=v0`
        
}

const FOUR_SECONDS = 50 * 1000;

export default class Productos extends ExternalClient {
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

    public async getProducts(querySearch: String, headers:object): Promise<IOResponse<string>>{
        let url = routes.getProducts(querySearch);
        console.log('search: ', url)
        let response : IOResponse<any> = await this.http.getRaw(url,{
            headers : headers
        });
        return { data : response.data, headers: response.headers, status: response.status};
    }
}


