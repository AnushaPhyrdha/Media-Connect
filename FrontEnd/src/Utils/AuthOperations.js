function getToken(){
    let Token;
    if(window.localStorage){
        Token = localStorage.getItem('token');
    }
    return Token;
}

function isAuthenticated(){
    if(window.localStorage){
        const token = localStorage.getItem('token');
        return Boolean(token);
    }
    return false;
}

function setToken(token){
    if (window.localStorage){
        localStorage.setItem("token", token)
    }
}

function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

export { getToken, isAuthenticated, setToken, getCurrentDate};