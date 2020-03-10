const start = Number(prompt('Enter the start: '));
const end = Number(prompt('Enter the end: '));
const step = Number(prompt('Enter the step: '));

const outputStr = document.getElementById('output')
const outputStr2 = document.getElementById('output2')
const outputStr3 = document.getElementById('output3')

if ((step === 0) || (isNaN(step))) {

    const outputStr = ` Error step can not be ${step}`
    output.innerHTML = '<h3>' + outputStr + '</h3>'}
    else{
        if (( step > 0) && (end < start)){
            const outputStr = 'Error end value can not be reached '
            output.innerHTML = '<h3>' + outputStr + '<h3>'
        }
        else if ((step < 0) && (end > start)){
            const outputStr = 'Error end value can not be reached '
            output.innerHTML = '<h3>' + outputStr + '<h3>'
        }
        else{

            var i = 0;
            var arr = [];
            var binary = [];
            var sum = 0;

            if(step>0){
                
                for (i = start; i<=end; i = i +step){
                    arr.push(i)
                    const outputStr = 'The generated array: ' + arr
                    output.innerHTML = '<h3>' + outputStr + '<h3>'

                    sum = sum + i
                    const outputStr2 = ' The sum is: ' +sum
                    output2.innerHTML = '<h3>' + outputStr2 + '<h3>'

                    binary.push(i.toString(2))
                    const outputStr3 = ' The binary of absolute elements are: ' + binary
                    output3.innerHTML = '<h3>' + outputStr3 + '<h3>'

                }
            }
            else if (step <0){
                for (i = start; i>=end; i =i+step){
                    arr.push(i)
                    const outputStr = 'The generated array: ' + arr
                    output.innerHTML = '<h3>' + outputStr + '<h3>'

                    sum = sum + i
                    const outputStr2 = ' The sum is: ' +sum
                    output2.innerHTML = '<h3>' + outputStr2 + '<h3>'

                    binary.push(i.toString(2))
                    const outputStr3 = ' The binary of absolute elements are: ' + binary
                    output3.innerHTML = '<h3>' + outputStr3 + '<h3>'
                }

            }
        }
    }