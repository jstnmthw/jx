import axios from '@/lib/axios'

export const fetcher = (url: string) =>
    axios
        .get(url)
        .then(res => res.data.data)
        .catch(error => {
            throw error
        })
