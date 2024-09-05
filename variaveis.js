function somar() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 + num2;
    
    document.getElementById("resultado").innerText = `O resultado da soma é: ${resultado}`;
}
