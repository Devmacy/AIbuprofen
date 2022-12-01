/**
 * 输出直角三角形
 * @param numberLine 行数
 * @param char 字符
 */
export function getRightAngleTriangle(numberLine = 10,char = '*'){
    // 定义返回值
    let result:string = ''
    for (let i = 1; i <= numberLine; i++) {
        for (let j = 1; j <= i; j++) {
            result += char
        }
        result += '\n'
    }
    return result
}
