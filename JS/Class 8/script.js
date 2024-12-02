// // Class

// class Car{
//     constructor(name, model, color, fuel){
//         this.name = name,
//         this.model = model,
//         this.color = color,
//         this.fuel = fuel
//     }
// }

// const car1 = new Car("ford", 2022, "gold", "disel")
// const car2 = new Car("Honda", 2018, "Black", "Petrol")

// console.log(car1);
// console.log(car2);

// Promise

async function demoPromise() {
  const myPromise = new Promise(function (resolve, reject) {
    const x = 0;

    if (x == 0) {
      resolve("Okay");
    } else {
      reject("Something went wrong");
    }
  });

  let result = await myPromise
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  console.log(result);
}

demoPromise();
