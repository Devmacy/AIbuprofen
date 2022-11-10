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
export function getRGBFromHexString(hexString: string = "fff"): object {
    const length = hexString.length
    // 原字符串
    let normalHexString = hexString
    // 定义返回值
    const RGBObj = {
        R: 0,
        G: 0,
        B: 0
    }
    // 如果没有值就返回 || 判断输入值的长度
    if (!normalHexString || length > 6 || (length !== 3 && length !== 6)) {
        return RGBObj
    }
    //输入长度等于3时，转成六位
    if (length === 3) {
        normalHexString = getCopyHexString(normalHexString)
    }

    // 将原字符串插入逗号，然后分割
    getSplitString(normalHexString,2,',').split(',').map((item,index)=>{
        index === 0 ? RGBObj.R = Number.parseInt(item,16) :''
        index === 1 ? RGBObj.G = Number.parseInt(item,16) :''
        index === 2 ? RGBObj.B = Number.parseInt(item,16) :''
    })
    return RGBObj
}

/**
 * 将三位十六进制颜色字符串转为10进制
 * @param params 三维长度十六进制字符串
 */
export function getCopyHexString(params: string): string {
    const hexStringList = params.split('')
    return hexStringList.reduce((pre, cur) => {
        pre = pre + cur + cur
        return pre
    }, '')
}

/**
 * 每几位分割插入一个特殊字符
 * @param sourceString 原字符串
 * @param step 每几个插入字符
 * @param joinChar 插入的字符
 */
export function getSplitString(sourceString:string,step:number,joinChar:string): string {
    let splitString:string = ''
    for (let i = 0; i < sourceString.length; i++) {
        if (i % step === 0 && i !== 0) {
            splitString = splitString + joinChar
        }
        splitString += sourceString[i]
    }
    return splitString
}
