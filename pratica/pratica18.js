let num = (n1,n2,n3,n4) => {

    console.log(n1,n2,n3,n4)

    if (n1 > n2 && n1 >n3 && n1 > n4) {

        console.log("O maior numero é " + n1)

    } else if (n2 > n1 && n2 > n3 && n2 > n4) {

        console,log("O maior número é " + n2)

    } else if (n3 > n1 && n3 > n2 & n3 > n4) {

        console.log("O maior número é " + n3)

    } else {

        console.log("O maior número é" + n4)
    }
}

num(10,30,90,40)
