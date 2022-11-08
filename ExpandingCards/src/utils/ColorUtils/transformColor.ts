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
        let G = Number(g).toString(16)
        let B = Number(b).toString(16)
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
    if(!hexString){
        return {
            r:0,
            g:0,
            b:0
        }
    }


    return {
        r:0,
        g:0,
        b:0
    }
}
