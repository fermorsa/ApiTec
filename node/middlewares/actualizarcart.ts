import { response } from "../typings/outPutData";
import { json } from 'co-body'

export async function actualizarindivsub(ctx: Context, next: () => Promise<any>) {
    const {
        clients: {
            // apiVTEX : ApiVTEX
            actualizarindivsub : Actualizarindivsub
        }
    } = ctx

    const headersRequest:object = {
		"Accept" : "application/json",
		"Content-type" : "application/json",
		"X-VTEX-API-AppKey" : 'vtexappkey-tecmonterreymxqa-QSBKJG',
        "X-VTEX-API-AppToken" : 'JYKVKTXIRRITWXAQYVXQUYQIGMKPYBJUSICFTZKUMVZPSVMDIHMRXVDKHBOXIHKPINBNUUWYLDDZZBQLZHHQPRXWERXRKNLELKHETZINKNGURELFLDXBATZQQFJCXENX',
	}

    let payload = await json(ctx.req);
    console.log("payload NOW", JSON.stringify(payload[0]))

    let responseSpecSku: response = await Actualizarindivsub.updateindivsub(payload, headersRequest)
    console.log("el responseSpecSku data:", responseSpecSku.data);
       
    ctx.status = 204
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
        responseSpecSku
    }
    await next()
}