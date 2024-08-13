const num: number = 5;
let str: string = 'hello';
let bool: boolean = true;

(function handlingNumber(num:number):number {
    console.log(num);
    return num
})(num);

(function handlingString(str:string):string {
    console.log(str);
    return str
})(str);

(function handlingBoolean(bool:boolean):boolean {
    console.log(bool);
    return bool
})(bool);
