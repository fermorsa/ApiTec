import { response } from "../typings/outPutData";

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

    const url = decodeURI(ctx.request.url);
    console.log(`url --> ${url}`)
    const data = url.split('/')[3];
    console.log(`params --> ${data}`)

    let objData = {
        id: data.split('|')[0],
        value: data.split('|')[1]
    }
    console.log(`data ${JSON.stringify(objData)}`)

    let responseSpecSku: response = await Actualizarindivsub.updateindivsub(objData, headersRequest)
    console.log("el responseSpecSku data:", responseSpecSku.data);
       
    ctx.status = 204
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
        responseSpecSku
    }
    await next()
}