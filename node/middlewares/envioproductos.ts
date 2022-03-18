import { json } from 'co-body'
import { response } from "../typings/outPutData";

export async function envioproductos(ctx: Context, next: () => Promise<any>) {
    const {
        clients: {
            // apiVTEX : ApiVTEX
            envioproductos : EnvioProductos
        }
    } = ctx

    const headersRequest:object = {
		"Accept" : "application/json",
		"Content-type" : "application/json",
		"X-VTEX-API-AppKey" : 'vtexappkey-tecmonterreymxqa-QSBKJG',
        "X-VTEX-API-AppToken" : 'JYKVKTXIRRITWXAQYVXQUYQIGMKPYBJUSICFTZKUMVZPSVMDIHMRXVDKHBOXIHKPINBNUUWYLDDZZBQLZHHQPRXWERXRKNLELKHETZINKNGURELFLDXBATZQQFJCXENX',
	}


    //  let arraysinsplit = ctx.querystring
    //     console.log("elarraysinnadaenv", arraysinsplit)

    var bodyEnvio = await json(ctx.req);
    console.log("elbodyenvio", bodyEnvio)

        // let arraysinsplit = ctx.querystring
        // console.log("elarraysinnada", arraysinsplit)
    //   let arraySkuId: string[] = ctx.querystring.split('=')[1].split(',')
    // console.log("el arrayskuid",arraySkuId)

        //con este convertimos de solo un array con una cadena de strings a un array de arrays por producto con seller
        // let objeto: any[] = [];
        // arraySkuId.forEach((valor, index, array) => {
        // let siguiente = index + 1;
        // if (index < 1) {
        // let concatenacion = { nombre: valor, arreglo: array[siguiente] };
        // objeto.push(concatenacion);
        // }
        // if (index % 2 == 0 && index >= 2) {
        // let concatenacion = { nombre: valor, arreglo: array[index + 1] };
        // objeto.push(concatenacion);
        // }
        // });
        // console.log(objeto);

    //aquí creamos el array que se llega al final y se entrega como respuesta
    let arraySkuFinal: any[] = ["la respuesta del servicio"]
    // aquí creamos un nuevo array para la separación de los elementos
    // let arrayBaseSinsku = [...arraySkuId]
    // console.log("base sin", arrayBaseSinsku)

    //aquí dividimos el nuevo array en 2 arrays uno de sellers y otro de skuid
    // let objetoDiv: any[] = [];
    // let arraySku: any[] = [];
    // arrayBaseSinsku.forEach((valor, index, array) => {
    // let siguiente = index + 1;
    // if (index == 0) {
    // arraySku.push(array[siguiente]);
    // objetoDiv.push(valor);
    // }
    // if (index % 2 == 0 && index >= 2) {
    // arraySku.push(array[index + 1]);
    // objetoDiv.push(valor);
    // }
    // });
    // console.log(arraySku);
    // console.log(objetoDiv);



  
        // let i = 0

        
        // let arrayIterable: any [] = [  
        //     [{idCliente: 223, idsku: "32"}],
        //     [{idCliente: 223, idsku: "32"}]

        // ]

        // let bodySimulator = {
        //         idcliente: "1235",
        //         idsku: "23, 33, 56, 65",
        //         seller: "centroidiomastecqa"
        //     }

        let bodyEnvioTabla = bodyEnvio[0]

        console.log("bodysimulator", bodyEnvioTabla)
            //
          
        


    // for await (const bodySimulator of arrayIterable) {
        // let responseSpecSku: response = await EntidadesLegales.search(skuId, headersRequest)

        let responseSpecSku : response = await EnvioProductos.enviop(bodyEnvioTabla, headersRequest)
        // console.log("el text2:", responseSpecSku.data[0].Text);
        // console.log("el responseSpecSku full:", responseSpecSku);
        console.log("el responseSpecSku data:", responseSpecSku.data);
       
        // console.log("lai",i)
        // function sumaDei() {
        //     i++
        //     console.log("lai de la funcion", i)
        // }
        

    //     if (responseSpecSku.data.length >0 ){
    //         Object.assign(objeto[i], {esquema:"entidad"});
    //     }
    //     if (responseSpecSku.data.length === 0){
    //             Object.assign(objeto[i], {esquema:"market"});
    //     }
        
    //     sumaDei()
    // }



    // console.log("el arraySkuFinal", arraySkuFinal)
    // console.log("el objeto", objeto)

    //aquí comienza la lógica de separación

    // { nombre: 'centroidiomastecqa', arreglo: '32', esquema: 'entidad' },
    // { nombre: 'centroidiomastecqa', arreglo: '21', esquema: 'entidad' },
    // { nombre: 'serviciosescolaresqa', arreglo: '2', esquema: 'market' },
    // { nombre: 'serviciosescolaresqa', arreglo: '16', esquema: 'market' }

    // let arrayentidades: any[] = [];
    // let arraymarket: any[] = [];

    // objeto.forEach(function(element){
    //     if (element.esquema == "entidad"){
    //         arrayentidades.push(element);
    //     }
    //     if (element.esquema == "market"){
    //         arraymarket.push(element);
    //     }

    // })
    // console.log("el arrayentidades", arrayentidades);
    // console.log("el arraymarket", arraymarket);
    // }

    ctx.status = 200
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
        // activo : activoCargoAEdoCuenta,
        // activoServicio : activoServicio,
        // activoProducto : activoProducto
        arraySkuFinal
        // objeto
    }
    await next()
}