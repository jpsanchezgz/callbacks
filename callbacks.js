
console.log('si funciona')

setTimeout(() => {
    console.log('Hola dos segundos después')
}, 2000)

console.log('después del time out')

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