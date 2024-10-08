import { useMutation, useQuery } from "@tanstack/react-query"; 
import axios from "axios";

export const useSignup = () => {
    const mutation = useMutation({
       mutationFn: async(input)=>
        {
            
            const{data} = await axios.post('/tasks',
            {
            input
            })
          }
})
return mutation;
}

const fetchData = async() => {
    const data = await axios.get('/tasks');
    return data;
}
export const useFetch = () => {
   const response = useQuery({
        queryKey: 'fetchData',
        queryFn: fetchData()
    })
    return response
} 
