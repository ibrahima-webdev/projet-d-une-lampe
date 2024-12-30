function validateForm(){
    const inputEmail = document.getElementById('email')
    const inputError = document.getElementById('email-error')
    if( inputEmail.value === ''){
        inputError.textContent = 'le champ ne doit pas être vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize='20px'
    }
    else if (inputEmail.value.length < 6) {
        inputError.textContent ="Le nombre ...."
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize='20px'
    } else {
        inputEmail.value = ''
        alert('Votre message a étè enregistré avec succes')
    }
    const inputMessage = document.getElementById('message')
    const inputerror = document.getElementById('message')
    if( inputMessage.value === ''){
        inputerror.textContent = 'le champ ne doit pas être vide'
        inputerror.style.textAlign = 'center'
        inputerror.style.color = 'red'
        inputerror.style.fontSize='20px'
    }
    
    return false
}