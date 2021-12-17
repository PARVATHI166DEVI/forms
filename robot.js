function add(e){
    const details = {
        name: e.name.value,
        age: e.age.value,
        weight: e.weight.value,
        favourite: e.favourite.value
    }
    console.log("Object");
    console.log(details);
    console.log("Json format");
    console.log(JSON.stringify(details));
}
