//Es5
function add(a,b){
    return a+b
}

//Es6 > Ecma Script
const add = (a,b) => { return a+b}


//////////////////
function langauge(name,country){
    this.name = name
    this.country=country
    this.add = (a,d) =>{}
}

var Hindi = new langauge()

class langauge1{
    constructor(name,country){
        this.name = name
        this.country=country
    }

    add(){

    }

    sub()
}

export default langauge1



var English = new langauge1()



function add(a,b){
    var add = a+b
    var sub = a-b
    var out = add,sub
    return out
}

hotreloading