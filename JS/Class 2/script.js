// Operators:

    // 1. Arithmetic op --> (+, -, *, /, %, **, ++, --)

        // let a = 10;
        // let result;

        // result = a + 5;
        // result = a - 5;
        // result = a * 5;
        // result = a / 5;
        // result = a % 5;
        // result = a ** 3;
        // result = ++a;
        // result = --a;

        // console.log(result);

    // 2. Assignment op --> (=, +=, -=, *=, /=, **=)

        // let a = 10;

        // a += 5;   // a = a + 5;
        // a -= 5;   // a = a - 5;
        // a *= 5;   // a = a * 5;
        // a /= 5;   // a = a / 5;
        // a **= 5;   // a = a ** 5;

        // console.log(a);

    // 3. Comparision op --> (==, ===, !=, !==, >, <, >=, <=) ---> boolean (true or false)

        // let x = 5;
        // let result;

        // result = (x == 5)
        // result = (x === 5)
        // result = (x != 7)
        // result = (x !== 5)
        // result = (x > 5)
        // result = (x >= 5)
        // result = (x < 5)
        // result = (x <= 5)

        // console.log(result);        

    // 4. Logical op --> (&&, ||, !)

        // &&

        // (True)  && (True)  ---> True       
        // (True)  && (False) ---> False       
        // (False) && (True)  ---> False       
        // (False) && (False) ---> False  
            
            // let x = 20;
            // let result;

            // result = (x != 20) && (x < 10)

            // console.log(result);
        
        // ||

        // (True)  || (True)  ---> True     
        // (True)  || (False) ---> True      
        // (False) || (True)  ---> True       
        // (False) || (False) ---> False
  
            // let x = 20;
            // let result;

            // result = !((x == 20) || (x < 10))

            // console.log(result);

        // !

        // (True)  ---> false

    // 5. Bitwise op --> (&, |, ~)

    // &

        // (1) & (1)  ---> 1       
        // (1) & (0)  ---> 0       
        // (0) & (1)  ---> 0       
        // (0) & (0)  ---> 0  

        // let a = 6;
        // let result;

        // result = a & 1

        // console.log(result);

        // Demo:

        // (6) ----> 0110
        // (1) ----> 0001
        //        ------------
        //           0000 ----> 0

    // |

        // (1) & (1)  ---> 1       
        // (1) & (0)  ---> 1      
        // (0) & (1)  ---> 1     
        // (0) & (0)  ---> 0

        // let a = 6;
        // let result;

        // result = a | 2

        // console.log(~result);

        // Demo:

        // (6) ----> 0110
        // (2) ----> 0010
        //        ------------
        //           0110 ---->  6

    // 6. Ternary op

        // let age = 14;

        // let result = (age > 18) ? "Your Eligible" : "Not Eligible";

        // console.log(result);
        
    // 7. typeof op