import { checkEmail, checkPassword } from './utils/utlis.js';
import { api } from './service/api.js';





const usersList = document.getElementById('usersList')
const newUserList = document.getElementById('newUserList')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const sendBtn = document.getElementById('sendBtn')
const updBtn = document.getElementById('updBtn')
const delBtn = document.getElementById('delBtn')
const editBtn = document.getElementById('editBtn')
const logOutBtn = document.getElementById('logOutBtn')

const inputFirstName = document.getElementById('inputFirstName')
const inputLastName = document.getElementById('inputLastName')
const inputEmail = document.getElementById('inputEmail')
const inputJob = document.getElementById('inputJob')


const loginForm = document.getElementById('loginForm')
const mainDiv = document.getElementById('main-div')


const updateForm = document.getElementById('updateForm')
const inputFirstNameNew = document.getElementById('inputFirstNameNew')
const inputLastNameNew = document.getElementById('inputLastNameNew')
const inputEmailNew = document.getElementById('inputEmailNew')
const inputJobNew = document.getElementById('inputJobNew')



let currentPage = 1
let totalPages = null
let request = null



if (localStorage.getItem('token')) {
    loginForm.classList.toggle("displayNone");
    mainDiv.classList.toggle("displayNone");
    logOutBtn.classList.toggle("displayNone");
    pages()
    loadUsersList()
}


//=========================================================================================================
const newUsersFirstName = document.getElementById('first_name')
const newUsersSecondName = document.getElementById('second_name')
const newUsersEmail = document.getElementById('emaill')
const newUsersJob = document.getElementById('job')
const newUsersID = document.getElementById('id')

const prevBtnNew = document.getElementById('prevBtnNew')
const nextBtnNew = document.getElementById('nextBtnNew')
prevBtnNew.disabled = true
nextBtnNew.disabled = true
editBtn.disabled = true
delBtn.disabled = true


let newUsers = []
let currentUser = -1
let currID = null






function insertUser(user) {
    const userKeys = Object.keys(user)

    newUsersFirstName.innerText = `${userKeys[0]}: ${user[userKeys[0]]}`
    newUsersSecondName.innerText = `${userKeys[1]}: ${user[userKeys[1]]}`
    newUsersEmail.innerText = `${userKeys[2]}: ${user[userKeys[2]]}`
    newUsersJob.innerText = `${userKeys[3]}: ${user[userKeys[3]]}`
    newUsersID.innerText = `${userKeys[4]}: ${user[userKeys[4]]}`
}



function createNewUser(promise) {
    promise
        .then(response => {
            insertUser(response)

            const userKeys = Object.keys(response)
            const newUser = {
                first_name: `${response[userKeys[0]]}`,
                last_name: `${response[userKeys[1]]}`,
                email: `${response[userKeys[2]]}`,
                job: `${response[userKeys[3]]}`,
                id: `${response[userKeys[4]]}`
            }

            newUsers.push(newUser)
            currentUser = newUsers.length - 1

            if (currentUser > 0) {
                prevBtnNew.disabled = false
            }

            editBtn.disabled = false
            delBtn.disabled = false
        })
        .catch(error => console.log(error))
}



function updateNewUsers(promise) {
    promise
        .then(response => {


            const userKeys = Object.keys(response)
            currID = `${response[userKeys[4]]}`

            newUsers[currentUser] = {
                first_name: `${response[userKeys[0]]}`,
                last_name: `${response[userKeys[1]]}`,
                email: `${response[userKeys[2]]}`,
                job: `${response[userKeys[3]]}`,
                id: currID,
            }


            insertUser(newUsers[currentUser])

        })
        .catch(error => console.log(error))

    console.log(newUsers)
}


function deleteNewUser() {
    if (currentUser === newUsers.length - 2) {
        nextBtnNew.disabled = true
    }


    newUsers.splice(currentUser, 1)


    if (currentUser === newUsers.length && currentUser !== 0) {
        currentUser = newUsers.length - 1
        insertUser(newUsers[currentUser])
    }

    else if (newUsers.length >= 1) {
        insertUser(newUsers[currentUser])
    }
    else {
        newUsersFirstName.innerText = ''
        newUsersSecondName.innerText = ''
        newUsersEmail.innerText = ''
        newUsersJob.innerText = ''
        newUsersID.innerText = ''
    }



    if (newUsers.length <= 1) {
        prevBtnNew.disabled = true
        nextBtnNew.disabled = true
    }

    if (newUsers.length === 0) {
        currentUser = -1
        delBtn.disabled = true
        editBtn.disabled = true
    }

}


prevBtnNew.addEventListener('click', function () {
    currentUser -= 1
    insertUser(newUsers[currentUser])
    if (currentUser === 0) {
        prevBtnNew.disabled = true
    }
    nextBtnNew.disabled = false
})




nextBtnNew.addEventListener('click', function () {
    currentUser += 1
    insertUser(newUsers[currentUser])
    if (currentUser === newUsers.length - 1) {
        nextBtnNew.disabled = true
    }
    prevBtnNew.disabled = false
})



// ======================================================================================================



const login = document.getElementById('email');
const password = document.getElementById('password');
const buttonLogin = document.getElementById('loginBtn');
const pAlert = document.getElementById('alert');
buttonLogin.disabled = true;
let emailValidation = false;
let passwordValidation = false;
let redirectValue = false


function checkInputs() {
    if (login.value.trim() !== '' && password.value.trim() !== '') {
        buttonLogin.disabled = false;
    }
    else {
        buttonLogin.disabled = true;
    }
}

login.addEventListener('input', checkInputs);
password.addEventListener('input', checkInputs);




function checkError() {
    emailValidation = checkEmail(login.value)
    passwordValidation = checkPassword(password.value)

    if (!emailValidation && passwordValidation) {
        pAlert.innerText = 'Valid Erorr: Incorrect login and password';
    }
    else if (!emailValidation) {
        pAlert.innerText = 'Valid Erorr: Incorrect login';
    }
    else if (passwordValidation) {
        pAlert.innerText = 'Valid Erorr: Incorrect password';
    }
    else {
        pAlert.innerText = ''
        redirectValue = true
    }

}



login.addEventListener('blur', checkError)
password.addEventListener('blur', checkError)



buttonLogin.addEventListener('click', () => {
    checkError()
    if (redirectValue === true) {

        const promise = api.login({
            "email": login.value,
            "password": password.value
        })


        promise
            .then(response => {
                if ("error" in response) {
                    pAlert.innerText = `Server Error: ${response["error"]}`;
                }
                else {
                    loginForm.classList.toggle("displayNone");
                    mainDiv.classList.toggle("displayNone");
                    logOutBtn.classList.toggle("displayNone");
                    let token = response["token"]

                    pages()
                    loadUsersList()

                    api.setToken(token)
                    login.value = '';
                    password.value = '';
                }
            })
            .catch(error => console.log(error))
    }
    else {
        password.value = ''
    }

})










// ======================================================================================================




function pages() {
    totalPages = api.getTotalPages()

    if (totalPages === 1) {
        nextBtn.disabled = true
    }
    prevBtn.disabled = true
}





function loadUsersList() {
    api.loadUserList(currentPage)
        .then(response => {
            const list = document.createElement('ul')
            list.id = 'usersListUl'

            for (let i = 0; i < response['data'].length; i++) {
                const listElem = document.createElement('li')
                listElem.innerText = `${response['data'][i]['first_name']} ${response['data'][i]['last_name']}, ${response['data'][i]['email']}`
                list.append(listElem)
            }

            usersList.append(list)
        })
        .catch(error => console.log(error))

}

prevBtn.addEventListener('click', function () {
    try {
        document.getElementById('usersListUl').remove()
    }
    catch { }

    currentPage -= 1
    if (currentPage === 1) {
        prevBtn.disabled = true
    }
    nextBtn.disabled = false

    loadUsersList()
})



nextBtn.addEventListener('click', function () {
    try {
        document.getElementById('usersListUl').remove()
    }
    catch { }


    currentPage += 1
    if (currentPage === totalPages) {
        nextBtn.disabled = true
    }
    prevBtn.disabled = false

    loadUsersList()
})



function createUser() {

    try {
        document.getElementById('newUsersListUl').remove()
    }
    catch { }





    if (request === "CREATE") {
        const user = {
            first_name: inputFirstName.value,
            last_name: inputLastName.value,
            email: inputEmail.value,
            job: inputJob.value,
        }
        const promise = api.createNewUsers(user)
        createNewUser(promise)
    }
    else if (request === 'UPDATE') {
        const user = {
            first_name: inputFirstNameNew.value,
            last_name: inputLastNameNew.value,
            email: inputEmailNew.value,
            job: inputJobNew.value,
            id: newUsers[currentUser]['id']
        }
        const promise = api.updateNewUsers(user, newUsersID.value)
        updateNewUsers(promise)
    }

    else if (request === 'DELETE') {
        api.deleteNewUsers(newUsersID.value)
        deleteNewUser()
    }
}

sendBtn.addEventListener('click', function () {
    request = "CREATE"
    createUser()
})

updBtn.addEventListener('click', function () {
    updateForm.classList.toggle("displayNone");
    request = "UPDATE"
    createUser()
})

delBtn.addEventListener('click', function () {
    request = "DELETE"
    createUser()
})

logOutBtn.addEventListener('click', function () {
    loginForm.classList.toggle("displayNone");
    mainDiv.classList.toggle("displayNone");
    logOutBtn.classList.toggle("displayNone");
    localStorage.removeItem('token');
    try {
        document.getElementById('usersListUl').remove()
    }
    catch { }
})


editBtn.addEventListener('click', function () {
    updateForm.classList.toggle("displayNone");
    inputFirstNameNew.value = newUsers[currentUser]['first_name']
    inputLastNameNew.value = newUsers[currentUser]['last_name']
    inputEmailNew.value = newUsers[currentUser]['email']
    inputJobNew.value = newUsers[currentUser]['job']

})










