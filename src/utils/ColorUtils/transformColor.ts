/**
 * 返回一个十六进制或rgb类型的字符串从数字中
 * @param r 红
 * @param g 绿
 * @param b 蓝
 * @param type 类型
 */

export function getHexOrRgbString(r: number, g: number, b: number, type: string): string {
    if (type === 'rgb') {
        return `rgb(${r},${g},${b})`
    } else if (type === 'hex') {
        let R = Number(r).toString(16)
        R = R.length === 1 ? `0${R}` : `${R}`
        let G = Number(g).toString(16)
        G = G.length === 1 ? `0${G}` : `${G}`
        let B = Number(b).toString(16)
        B = B.length === 1 ? `0${B}` : `${B}`
        return `#${R}${G}${B}`
    } else {
        return ''
    }
}

/**
 * 十六进制转rgb对象
 * @param hexString 十六进制字符串
 */
export function getRGBFromHexString(hexString:string = "#fff"):object{
    const RGBObj =  {
        r:0,
        g:0,
        b:0
    }

    // 如果没有值就返回
    if(!hexString){
        return RGBObj
    }
    // 如果不包含#号返回
    const list = hexString.split('#')
    // const withoutHexString = list[1]
    console.warn(list)

    return {
        r:0,
        g:0,
        b:0
    }
}
