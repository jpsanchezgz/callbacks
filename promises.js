
//Promesas

// resolve -> es una funcion que debemos ejecutar cuando queremos resolver una promesa
// reject -> es una funcion que ejecutamos cuando queremos rechazar una promesa. 



// new Promise( (resolve, reject) => {
//     if () {
//         resolve()
//     }
//     else {
//         reject()
//     }
// })

// un objeto promesa tiene 2 funciones
// then() que se ejecuta cuando la promesa se resolvio
// catch() que se ejecuta cuando la promesa se rechazó

// resolver -> el cambio de estado de pending a resolved. 
// rechazar -> el cambio de estado de pending a reject. 

// function promesa () {
//     reurn new Promise((resolve, reject) => {})
// }

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

// promificacion: es el proceso de volver promesa algo que no lo era inicialmente. 
function construir (muroAConstruir) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
             muroAConstruir.construido = true

            if (muroAConstruir.construido == false) {
                reject('No se pudo construir')
                return
            }

            resolve(muroAConstruir)


        }, 1000)
    })
}

function aplanar (muroAAplanar) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            muroAAplanar.aplanado = true
            if(!muroAAplanar.aplanado) {
                reject('no se pudo aplanar')
            }

            resolve(muroAAplanar)
        }, 1000)
    })
}

function pintar (muroAPintar) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            muroAPintar.pintado = false
            if(!muroAPintar.pintado) {
                reject('no se pudo pintar')
            }

            resolve(muroAPintar)
        }, 1000)
    })
}

// construir(muro)
// .then((muroConstruido) => {
//     console.log('se resolvió ', muroConstruido)
//     aplanar(muroConstruido)
//     .then((muroAplanado) => {
//         console.log('aplanado')
//         pintar(muroAplanado)
//         .then((muroPintado) => {
//             console.log('pintado')
//             console.log('FIN: ', muroPintado)
//         })
//         .catch(error => {
//             console.error('error', error)
//         })
//     })
//     .catch(error => {
//         console.error('eeror', error)
//     })
// })
// .catch((error) => {
//     console.log('Se rechazó ', error)
// })

// console.log('promesa 'construir(muro))

// async / await
// donde yo uso await, debo marcar la funcion contenedora (del await) como asyncrona
// la funcion que está marcada con async, se vuelve una función que regresa una promesa. 
async function principal () {
    const muroConstruido = await construir(muro)
    const muroAplanado = await aplanar(muroConstruido)
    const muroPintado = await pintar(muroAplanado)
    console.log('fin; ', muroPintado)
    return muroPintado

}

principal()
    .then((resultado) => console.log('todo cool', resultado))
    .catch((error) => console.error('fallé', error))