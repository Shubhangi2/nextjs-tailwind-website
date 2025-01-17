import axiosClient from './axios';


export function getProperties() {
    return axiosClient.get('property/search?searchQuery=&page=1')
}
