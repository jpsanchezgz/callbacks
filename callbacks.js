
// console.log('si funciona')

// setTimeout(() => {
//     console.log('Hola dos segundos después')
// }, 2000)

// console.log('después del time out')

//construir una pared
// -construida
// -apalanada 
// -pintada

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
}

// sintaxis por convecion de un callback
/// convencion = acuerdo general
// callback reciba siempre al menos dos parámetros
// callback(error, data)

function construir(muroAConstruir, callback) { // 1 segundo
    setTimeout(() => {
        muroAConstruir.construido = true
        
        let error = null
        if (muroAConstruir.construido == false) {
            error = 'No se pudo construir'
        }
        callback(error, muroAConstruir)
    }, 1000)
}

function aplanar(muroAAplanar, callback) { // 2 segundos
    setTimeout(() => {
        muroAAplanar.aplanado = false
        let error = muroAAplanar.aplanado ? null : 'No se pudo aplanar'
        callback(error, muroAAplanar)
    }, 2000)
}

function pintar (muroAPintar, callback) { // 2 segundos
    setTimeout(() => {
        muroAPintar.pintado = true
        let error = muroAPintar.pintado ? null : 'No se pudo pintar'
        callback(error, muroAPintar)
    }, 2000)
}

// const muroConstruido = construir(muro)
// const muroAplanado = aplanar(muroConstruido)
// const muroPintado = pintar(muroAplanado)

// construir(muro, (muroConstruido) => {
//     console.log('muro:', muroConstruido)
//     aplanar(muroConstruido, (muroAplanado) => {
//         console.log('muro:', muroAplanado)
//         pintar(muroAplanado, (muroPintado) => {
//             console.log('muro final:', muroPintado)
//         })
//     })
// })

construir(muro, (errorDeConstruccion, muroConstruido) => {
    if (errorDeConstruccion) {
        console.error('Error de construccion: ', errorDeConstruccion)
        return //rompe con la ejecución de la función, salida temprana
    }

    aplanar(muroConstruido, (errorDeAplanar, muroAplanado) => {
        if (errorDeAplanar) {
            console.error('Error de aplanado: ', errorDeAplanar)
            return //rompe con la ejecución de la función
        }

        pintar(muroAplanado, (errorDePintar, muroPintado) => {
            if (errorDePintar) {
                console.error('Error de pintado: ', errorDePintar)
                return //rompe con la ejecución de la función
            }

            console.log('Muro Final: ', muroPintado)
        })
    })
})

// falsy
// - false, '', null, undefined, 0

// truthy
// - true, todos los vlores que representan que existe algo, '1', 1 o -1, {}, []

/* 
Practica:
Objetivo: Plasmar en funciones y callbacks el proceso de aplicación de kodemia.
1. Entrevista
2. Carta Oferta
3. Inscripción
4. Asisti a Clase

Materia prima: El Koder

- entrevistado
- ofertado
- inscrito
- enClase
*/

const koder = {
    entrevistado: false,
    ofertado: false,
    inscrito: false,
    enClase: false
}

function entrevistar(koderAEntrevistar, callback) {
    setTimeout(() => {
        koderAEntrevistar.entrevistado = true
        let error = koderAEntrevistar.entrevistado ? null : 'El Koder no atendió la entrevista'
        callback(error, koderAEntrevistar)
    }, 3000)
}

function ofertar(koderAOfertar, callback) {
    setTimeout(() => {
        koderAOfertar.ofertado = true
        let error = koderAOfertar.ofertado ? null : 'El Koder no recibió su carta oferta'
        callback(error, koderAOfertar)
    }, 1000)
}

function inscribir(koderAInscribir, callback) {
    setTimeout(() => {
        koderAInscribir.inscrito = true
        let error = koderAInscribir.inscrito ? null : 'El Koder no fue inscrito'
        callback(error, koderAInscribir)
    }, 3000)
}

function tomarClase(koderATomarClase, callback) {
    setTimeout(() => {
        koderATomarClase.enClase = true
        let error = koderATomarClase.enClase ? null : 'El Koder no asistió a clase'
        callback(error, koderATomarClase)
    }, 1000)
}

entrevistar(koder, (errorDeEntrevista, koderEntrevistado) => {

    if(errorDeEntrevista) {
        console.error(errorDeEntrevista)
        return
    }
    console.log('entrevistando')

    ofertar(koderEntrevistado, (errorDeOferta, koderOfertado) => {
        if(errorDeOferta) {
            console.error(errorDeOferta)
            return
        }
        console.log('ofertando')

        inscribir(koderOfertado, (errorDeInscripcion, koderInscrito) => {
            if(errorDeInscripcion) {
                console.error(errorDeInscripcion)
                return
            }
            console.log('inscribiendo')

            tomarClase(koderInscrito, (errorDeClase, koderEnClase) => {
                if(errorDeClase) {
                    console.error(errorDeClase)
                    return
                }
                console.log('Llendo a clase')
                console.log('El Koder Final: ', koderEnClase)
            })
        })    
    })
})