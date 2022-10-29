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
