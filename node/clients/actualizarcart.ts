import {
	InstanceOptions,
	IOContext,
	ExternalClient,
	IOResponse
} from "@vtex/api";


const routes = {
    updateindivsub : (querySearch: String) =>
       `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescartprueba/documents/${querySearch}`
      
}

const FOUR_SECONDS = 50 * 1000;

export default class Actualizarindivsub extends ExternalClient {
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

    public async updateindivsub(params: any, headers:object): Promise<IOResponse<string>>{
        console.log(`id--> ${params.id} json--> ${JSON.stringify(params.payload)}`)
        let url = routes.updateindivsub(params.id);
        let response : IOResponse<any> = await this.http.patch(url, params.payload, {
            headers : headers
        });
        return { data : response.data, headers: response.headers, status: response.status};
    }
}


