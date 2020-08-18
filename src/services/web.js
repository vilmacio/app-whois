import axios from 'axios';

export default function api(domain) {
    return axios.get('https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=' + domain + '&format=json',
        {
            'headers': {
                'x-rapidapi-host': 'zozor54-whois-lookup-v1.p.rapidapi.com',
                'x-rapidapi-key': '1e4aa2fcdbmsh21b3dcfb9328e7ep136d0cjsn93a2cce79357',
                'useQueryString': true
            }
        })
}