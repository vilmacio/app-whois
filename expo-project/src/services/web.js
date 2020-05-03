import axios from 'axios';

module.exports = {
    api: (domain)=>{
        return axios.post("https://www.hostinger.com.br/whois", {
        domain: domain
    })
    }
}