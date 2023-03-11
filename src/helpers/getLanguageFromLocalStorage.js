import jwtDecode from "jwt-decode"

export async function getLanguageFromLocalStorage(){
    const token = localStorage.getItem('ChatBoxToken')
    const {language} = jwtDecode(token)
    return language;
}