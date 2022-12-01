/**
 * 获取文件后缀名
 * @param fileName 文件名
 * @param extensionChar 扩展符号分割
 */
export default function (fileName: string = '', extensionChar: string = '.') {
    if (!fileName) {
        return ''
    }
    const length = fileName.length
    const position = fileName.lastIndexOf(extensionChar)
    return fileName.slice(position + 1, length)
}
