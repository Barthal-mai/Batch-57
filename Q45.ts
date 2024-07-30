function create_car(manufacturer,model, ...options){
let car={
    manufacturer: manufacturer,
    model: model,
};
options.forEach(option=> {
    let [Key,value]= option.split(":");
    car[Key.trim()]=value.trim();
});
return car;
}
let my_car=create_car("Toyota","XX50","Year:2023","Main markets:China");
console.log(my_car);