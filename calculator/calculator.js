var btn = document.getElementById('calculate')
btn.onclick = function(){
    //btn.style.backgroundColor = 'orange'            //dynamic css
    var num1 = document.getElementById('first').value;
    var num2 = document.getElementById('second').value;
    if (num1 == null || num1 == "" || num2 == null || num2 == ""){alert('Please enter numbers')}
    else{
        var opr = document.getElementById('opr').value
        if (opr=='+'){
            var res = parseInt(num1) + parseInt(num2)
        }
        if (opr=='-'){
            var res = parseInt(num1) - parseInt(num2)
        }
        if (opr=='*'){
            var res = parseInt(num1) * parseInt(num2)
        }
        if (opr=='/'){
            var res = parseInt(num1) / parseInt(num2)
        }
        document.getElementById('result').value = res
    }
}

// dynamic css
// btn.onmouseenter = function(){
//     btn.style.color = 'black'
//     btn.style.fontSize = '19px'
// }