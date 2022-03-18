import { response } from "../typings/outPutData";

export async function borradogrupsub(ctx: Context, next: () => Promise<any>) {
    const {
        clients: {
            // apiVTEX : ApiVTEX
            borradogrupsub : Borradogrupsub
        }
    } = ctx

    const headersRequest:object = {
		"Accept" : "application/json",
		"Content-type" : "application/json",
		"X-VTEX-API-AppKey" : 'vtexappkey-tecmonterreymxqa-QSBKJG',
        "X-VTEX-API-AppToken" : 'JYKVKTXIRRITWXAQYVXQUYQIGMKPYBJUSICFTZKUMVZPSVMDIHMRXVDKHBOXIHKPINBNUUWYLDDZZBQLZHHQPRXWERXRKNLELKHETZINKNGURELFLDXBATZQQFJCXENX',
	}

        // let arraysinsplit = ctx.querystring
        // console.log("elarraysinnada", arraysinsplit)
    //   let arraySkuId: any = ctx.querystring.split('=')[1].split(',')
    // console.log("el arrayskuid",arraySkuId)

      let arraySkuId: string[] = ctx.querystring.split('=')[1].split(',')
    console.log("el arrayskuid",arraySkuId)


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
    // let arraySkuFinal: any[] = []
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



    // let arraySkuId: string[] = ctx.querystring.split('=')[1].split(',')
    // console.log("el arrayskuid",arraySkuId)
    // let arraySkuFinal: any[] = []

    // let activoCargoAEdoCuenta: boolean = true
    // let activoServicio: boolean = false
    // let activoProducto: boolean = false
    // for (let i=0; i<objeto.length; i++){
        // let i = 0

        let arrayresponseSpecSku: any =[]
        

    for await (const idRegistro of arraySkuId) {
        let responseSpecSku: response = await Borradogrupsub.deleteindivsub(idRegistro, headersRequest)
        // console.log("el text2:", responseSpecSku.data[0].Text);
        // console.log("el responseSpecSku full:", responseSpecSku);
        arrayresponseSpecSku.push(responseSpecSku)
        console.log("el responseSpecSku data:", responseSpecSku.data);
    }
        // console.log("lai",i)
        // function sumaDei() {
        //     i++
        //     console.log("lai de la funcion", i)
        // }
        

        // if (responseSpecSku.data.length >0 ){
        //     Object.assign(objeto[i], {esquema:"entidad"});
        // }
        // if (responseSpecSku.data.length === 0){
        //         Object.assign(objeto[i], {esquema:"market"});
        // }
        
        // sumaDei()
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


    ctx.status = 200
    ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
        // activo : activoCargoAEdoCuenta,
        // activoServicio : activoServicio,
        // activoProducto : activoProducto
        // arraySkuFinal
        // objeto
        arrayresponseSpecSku
    }
    await next()
}