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
    let normalHexString = ''
    const RGBObj = {
        r: 0,
        g: 0,
        b: 0
    }
    // 如果没有值就返回 || 判断输入值的长度
    if (!hexString || length > 6 || (length !== 3 && length !== 6)) {
        return RGBObj
    }
    //输入长度等于3时，转成六位
    if (length === 3) {
        normalHexString = getCopyHexString(hexString)
    }
    // 如果不包含#号返回
    const list = hexString.split('#')
    // const withoutHexString = list[1]
    console.warn(list)

    return {
        r: 0,
        g: 0,
        b: 0
    }
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
