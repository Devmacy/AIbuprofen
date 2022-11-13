/**
 * 从ctx图像data中获取到rgb数组
 * @param ctxImageData ctx的imageData的data
 */
export const getRGBList = (ctxImageData:object):Array<number[]> => {
    // rgb对象数组
    const rgbList:Array<number> = Object.values(ctxImageData) || []
    const length = rgbList.length

    // 返回结果
    const result:Array<number[]> = []
    for (let i = 0; i < length; i+=4) {
        const r = rgbList[i]
        const g = rgbList[i+1]
        const b = rgbList[i+2]
        result.push([r,g,b])
    }
    return result
}
