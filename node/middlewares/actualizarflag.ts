//import { response } from "../typings/outPutData";
import { json } from 'co-body'

export async function actualizarflagindivsub(ctx: Context, next: () => Promise<any>) {
    const {
        clients: {
            // apiVTEX : ApiVTEX
            actualizarflagindivsub: Actualizarflagindivsub
        }
    } = ctx

    const headersRequest: object = {
        "Accept": "application/json",
        "Content-type": "application/json",
        "X-VTEX-API-AppKey": 'vtexappkey-tecmonterreymxqa-QSBKJG',
        "X-VTEX-API-AppToken": 'JYKVKTXIRRITWXAQYVXQUYQIGMKPYBJUSICFTZKUMVZPSVMDIHMRXVDKHBOXIHKPINBNUUWYLDDZZBQLZHHQPRXWERXRKNLELKHETZINKNGURELFLDXBATZQQFJCXENX',
    }

    let payload = await json(ctx.req);
    console.log("payload NOW", JSON.stringify(payload))

    try {
        const reqs = Promise.all(payload.map((item: any) => {
            return Actualizarflagindivsub.updateflagindivsub(item, headersRequest)
        }));
        const fbProfile = await Promise.all([payload, reqs]);
        console.log(`return --> ${JSON.stringify(fbProfile)}`)

        let responseSpecSku = {
            flag: fbProfile
        }
        ctx.status = 204
        ctx.set('Cache-Control', 'no-cache')
        ctx.body = {
            responseSpecSku
        }
        await next()
    } catch (err) {
        console.log(err.stack);
        ctx.status = 400
        ctx.set('Cache-Control', 'no-cache')
        ctx.body = {
            err
        }
        await next()
    }
}