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

    public async updateindivsub(payload: any, headers:object): Promise<IOResponse<string>>{
        console.log(`payload CALL--> ${ JSON.stringify(payload[0])}`)
        let url = routes.updateindivsub(payload[0].id);

        const key = "id";
        delete payload[0][key];

        let response : IOResponse<any> = await this.http.patch(url, payload[0], {
            headers : headers
        });
        return { data : response.data, headers: response.headers, status: response.status};
    }
}


