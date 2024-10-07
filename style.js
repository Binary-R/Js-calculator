function add() {
    let firstDigit = prompt('input digit');
    let secondDigit = prompt('input digit');
    document.write('the sum of'  +  firstDigit  +  'and'  +  secondDigit  +  'is'  +  (parseInt(firstDigit) + parseInt(secondDigit)))
    return parseInt(firstDigit) + parseInt(secondDigit);
}
add()
document.write('<br>')

//SUBTRACTION


document.write('<br>')
let subtraction = 'subtract 10 from 20 is'

document.write(subtraction)
document.write('<br>')


let minusX = 20,
    minusY = 10;

    document.write(minusX - minusY)
    document.write('<br>')

    //DIVISION

    document.write('<br>')
    let division ='40 divided by 8 is'

    document.write(division)
    document.write('<br>')

    let diviX = 40,
        diviY = 8;

        document.write(diviX / diviY)
        document.write('<br>')


        //MUTIPLICATION


        document.write('<br>')
        let multiply = '16 multiplied by 16 is'

        document.write(multiply)
        document.write('<br>')

        let multyX = 16,
            multyY = 16;

            document.write(multyX * multyY)
            document.write('<br>')

            
            //EXPONENTIAL


            document.write('<br>')
            let exponential = '10 raised to the power of 10 is'

            document.write(exponential)
            document.write('<br>')

            let expoX = 10,
                expoY = 10;

                document.write(expoX ** expoY)