var running = true
var count = 0 



    for (let i = 1; i <= 100; i++) { 
    count++

        if (count % 3 == 0 && count % 5 == 0) {
        console.log (i, "fizzbuzz!")
        } 

        else if (count % 3 == 0) {
      console.log (i, "fizz")
        }

        else if (count % 5 == 0) {
        console.log (i, "buzz")
        }

        else {
        console.log (i)
        }

        if (count == 2) {
        running = false
        }
    }
