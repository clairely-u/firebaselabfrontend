import axios from 'axios';
import ShoutOut from '../models/ShoutOutInterface';

// deployed
// const baseURL = 'https://us-central1-fir-lab-1-81be8.cloudfunctions.net/api'
//local
const baseURL = 'http://localhost:5001/fir-lab-1-81be8/us-central1/api';

export function fetchShoutOuts(): Promise<ShoutOut[]> {
    return axios.get<ShoutOut[]>(`${baseURL}/shoutouts`)
    .then(res => res.data);
}

