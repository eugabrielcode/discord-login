const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email.value == ''){
        email.classList.add("errorImput")
    } else{
        email.classList.remove("errorImput")
    }

    if (password.value == ''){
        password.classList.add("errorImput")
    } else{
        password.classList.remove("errorImput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == -1)){
        email.classList.add("errorImput")
    } else{
        email.classList.remove("errorImput")
    }

    if (!isNaN(email.value) == true && email.value.length == 11){
        email.classList.remove("errorImput")
    }

    if (password.value.length <= 5){
        password.classList.add("errorImput")
    } else{
        password.classList.remove("errorImput")
    }
})



