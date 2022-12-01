/**
 * 返回参数数字的千分位分隔符字符串
 * @param num 整数数字
 * @param splitChar 分割字符
 * @param splitNum 分割位数
 */

export default (num: number = 0, splitChar = ',', splitNum = 3) => {
    // 如果是负数的话
    const negativeChar = num < 0 ? '-' : ''
    // 返回值
    let result = ''

    if (num === 0) {
        return '0'
    }

    if (!num) {
        return ''
    }

    // 判断正负数
    let numString = num < 0 ? (num.toString().slice(1, num.toString().length)) : num.toString()
    //字符长度
    const length = numString.length

    for (let i = length - 1; i >= 0; i--) {
        result = result + numString[i] + ((length - i) % splitNum !== 0 || i === 0 ? '' : splitChar)
    }
    let temp = ''
    for (let i = result.length - 1; i >= 0; i--) {
        temp += result[i]
    }

    return negativeChar + temp
}
