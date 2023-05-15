const number=[15,53,22,198,10,28,16,70,33,951]

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log("even",number[i])
    }else if (i % 2 == 0){
        console.log("odds",number[i])
    }else console.log("not avalible")
}