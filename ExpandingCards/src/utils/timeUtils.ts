export class CurrentTime{
    date:Date;
    formatter:String;

    constructor(date:Date,formatter:String) {
        this.date = date;
        this.formatter = formatter
    }

    getCurrentTimeStamp():String {
        return this.date.getTime().toString()
    }

    formatterTime(format:String):String{
        let tempFormat:String = format ? format : 'yyyy-MM-dd hh:mm:ss';
        let date:Date = this.date
        let obj:object = {
            yyyy: date.getFullYear(),
            MM: (date.getMonth() + 1) <= 9 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1),
            M: (date.getMonth() + 1),
            dd: date.getDate() <= 9 ? ('0' + date.getDate()) : date.getDate(),
            d: date.getDate(),
            hh: date.getHours() <= 9 ? ('0' + date.getHours()) : date.getHours(),
            h: date.getHours(),
            mm: date.getMinutes() <= 9 ? ('0' + date.getMinutes()) : date.getMinutes(),
            m: date.getMinutes(),
            ss: date.getSeconds() <= 9 ? ('0' + date.getSeconds()) : date.getSeconds(),
            s: date.getSeconds(),
        }
        for (let iterator in obj) {
            tempFormat = tempFormat.replace(iterator, `${obj[iterator]}`)
        }
        return tempFormat
    }
}
