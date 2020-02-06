import axios from 'axios';
export default class AxiosService {
    login(data) {
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, data)
    }
    getNotes(){
       let  token =localStorage.getItem('token')
        return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`,{
            headers: {
                Authorization: token
            },
        })
    }
    createNote(data){
        let  token =localStorage.getItem('token')

        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`,data,{
            headers: {
                Authorization: token
            },
        })
    }
}

