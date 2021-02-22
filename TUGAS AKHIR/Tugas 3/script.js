
function divideAndSort(value){
    let string = '' + value
    let record = []
    let result = ''


    for (x = 0; x <= string.length; x++) {
        if(string[x] == 0 && record.length == 0) {
            newString1 = string.substring(0,x)

            let box1 = []
            for(i=0; i < newString1.length; i++){
                box1.push(newString1[i])
            }
            box1.sort((a,b) => {
                return a-b
            })
            boxDone1 = box1.join('')
            result += boxDone1

            record.push(x)
        }else if(string[x] == 0 && record.length > 0){
            newString2 = string.substring(record[record.length-1] +1 ,x)

            let box2 = []
            for(z=0; z < newString2.length; z++){
                box2.push(newString2[z])
            }
            box2.sort((a,b) => {
                return a-b
            })
            boxDone2 = box2.join('')
            result += boxDone2

            record.push(x)

        }else if(string[x] == undefined){
            newString3 = string.substring(record[record.length-1] +1 ,x)
            let box3 = []
            for(q=0; q < newString3.length; q++){
                box3.push(newString3[q])
            }
            box3.sort((a,b) => {
                return a-b
            })
            boxDone3 = box3.join('')
            result += boxDone3
            
        } //isi
    }
    result = result / 2 *2
    console.log(result);
}


divideAndSort(5956560159466056)









