const sandra ={
    firstname: "catia",
    lastname:" fernandes",
    age: 25,
    fullname :function (){
        return this.firstname+" "+this.lastname;

    },
    getAge:function(){
        return this.age;
    
    },
    getName(){
        return this.name;
    }
}
sandra.age=26
sandra.nickname= "catia"
sandra.adress= "elima"
console.log(sandra.age);
console.log(sandra.nickname);
console.log(sandra.adress);
console.log( sandra.getAge());
console.log(sandra.getName());
console.log(sandra.fullname());
