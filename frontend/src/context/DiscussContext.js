import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  DiscussContext = createContext()


export default function DiscussProvider({children}) 
{
    const nav = useNavigate()
    const [discussion, setDiscussion] = useState([])
    const [onChange, setonChange] = useState(true)
   
    const addDiscuss = (discussion_title, content, topic) => {
      fetch("/discussions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          discussion_title: discussion_title,
          topic: topic,
          content: content,
        }),
      })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
        
          Swal.fire(
              'Error',
              response.error,
              'error'
          );
      } else if (response.success) {
          Swal.fire(
              'Success',
              response.success,
              'success'
          );
          setonChange(!onChange);
      } else {
        nav("/");

          Swal.fire(
              'Success',
              response.success,
              'success'
          );
      }
        });
    };
    
     

        
    
    const deleteDiscuss = (id) =>{
        fetch(`/discussions/${id}`, {
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
     //Fetch jobs
     const fetchDiscussions = () => {
       fetch('/discussions', {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
       })
         .then((res) => res.json())
         .then((response) => {
           setDiscussion(response);
         });
     };
   
     useEffect(() => {
       fetchDiscussions();
     }, [onChange]);

    const contextData ={
        discussion,
        
        deleteDiscuss,
        addDiscuss
    }

  return (
   <DiscussContext.Provider value={contextData}>
    {children}
   </DiscussContext.Provider>
  )
}