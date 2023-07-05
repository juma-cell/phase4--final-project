import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  DiscussContext = createContext()


export default function DiscussProvider({children}) 
{
    const nav = useNavigate()
    const [discuss, setDiscuss] = useState([])
    const [onChange, setonChange] = useState(true)


     // Approve posts by admins
     const approveDiscuss = (id) =>{
        fetch(`/api/discuss/approve/${id}`, {
            method: "PATCH"
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }

        })
    }
    const deleteDiscuss = (id) =>{
        fetch(`/discuss/${id}`, {
         method: "DELETE",
                })
        .then((res)=>res.json())
        .then((response)=>{
              if(response.success)
              {
                nav("/")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
              }
              else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }
              

        })
     }
 
    useEffect(()=>{
        fetch("/discussions")
        .then((res)=>res.json())
        .then((response)=>{
            setDiscuss(response)
            console.log("Discuss",response)
        })
    }, [onChange])

    const contextData ={
        discuss, 
        deleteDiscuss,
        approveDiscuss
    }

  return (
   <DiscussContext.Provider value={contextData}>
    {children}
   </DiscussContext.Provider>
  )
}