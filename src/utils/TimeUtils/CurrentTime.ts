export class CurrentTime{
    timeStamp:number;
    formatter:string;

    constructor(timeStamp:number,formatter:string) {
        this.timeStamp = timeStamp;
        this.formatter = formatter
    }

    formatterTime(format:string):string{

        interface timeType{
            yyyy:string,
            MM:string,
            M:string,
            dd:string,
            d:string,
            hh:string,
            h:string,
            mm:string,
            m:string,
            ss:string,
            s:string
        }

        let tempFormat:string = format ? format : 'yyyy-MM-dd hh:mm:ss';
        let date = new Date(this.timeStamp)
        let obj:timeType = {
            yyyy: date.getFullYear().toString(),
            MM: (date.getMonth() + 1) <= 9 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1).toString(),
            M: (date.getMonth() + 1).toString(),
            dd: date.getDate() <= 9 ? ('0' + date.getDate()) : date.getDate().toString(),
            d: date.getDate().toString(),
            hh: date.getHours() <= 9 ? ('0' + date.getHours()) : date.getHours().toString(),
            h: date.getHours().toString(),
            mm: date.getMinutes() <= 9 ? ('0' + date.getMinutes()) : date.getMinutes().toString(),
            m: date.getMinutes().toString(),
            ss: date.getSeconds() <= 9 ? ('0' + date.getSeconds()) : date.getSeconds().toString(),
            s: date.getSeconds().toString(),
        }

        let key: keyof timeType;
        for (key in obj) {
            let value = obj[key]
            tempFormat = tempFormat.replace(key, value)
        }
        return tempFormat
    }
}
