import {
	InstanceOptions,
	IOContext,
	ExternalClient,
	IOResponse
} from "@vtex/api";


const routes = {
    updateflagindivsub : (querySearch: String) =>
       `https://tecmonterreymxqa.vtexcommercestable.com.br/api/dataentities/entidadescartf/documents/${querySearch}`
      
}

const FOUR_SECONDS = 50 * 1000;

export default class Actualizarflagindivsub extends ExternalClient {
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

    public async updateflagindivsub(id: string, headers:object): Promise<IOResponse<string>>{
        console.log(`id--> ${ JSON.stringify(id)}`)
        let url = routes.updateflagindivsub(id);

        const payload = {
            "inyectar": true
        }

        let response : IOResponse<any> = await this.http.patch(url, payload, {
            headers : headers
        });
        return { data : response.data, headers: response.headers, status: response.status};
    }
}


