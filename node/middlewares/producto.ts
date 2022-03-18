import { response } from "../typings/outPutData";

export async function producto(ctx: Context, next: () => Promise<any>) {
    const {
        clients: {
            // apiVTEX : ApiVTEX
            productos : Productos
        }
    } = ctx

    const headersRequest:object = {
		"Accept" : "application/json",
		"Content-type" : "application/json",
		"X-VTEX-API-AppKey" : 'vtexappkey-tecmonterreymxqa-QSBKJG',
        "X-VTEX-API-AppToken" : 'JYKVKTXIRRITWXAQYVXQUYQIGMKPYBJUSICFTZKUMVZPSVMDIHMRXVDKHBOXIHKPINBNUUWYLDDZZBQLZHHQPRXWERXRKNLELKHETZINKNGURELFLDXBATZQQFJCXENX',
	}

  let skuId: any = ctx.querystring.split('=')[1].split(',')
    console.log("el arrayskuid",skuId)

    let response: response = await Productos.getProducts(skuId, headersRequest)


    ctx.status = 200
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
        response
    }
    await next()
}