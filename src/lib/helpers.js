export const hasProperty = (object, key)=> {
    return object.hasOwnProperty(key)
}

export const isArray = (value)=> {
    return Array.isArray(value)
}

export default class Helpers {
    constructor(module) {}
    _resolver(object , property = []){

        for( let i = 0; i < property.length ; i++){
            Object.defineProperty(this, property[i], {
                get:function(){
                    if(!hasProperty(object,property[i])){
                        throw new Error(`args ${property[i]} must be defined`)
                    }
                },
                configurable: true
            })
        }
    }

    get Access(){
        return 'lorem ipsum dolor sit amet'
    }

}