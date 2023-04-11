"use client"
import { useRouter } from "next/navigation"

const Users = ({users}) => {


    const  router=useRouter()
  return (


    <ul  className="list-group">
        
        {
            users.map((usr)=>(
                <li key={usr.id} className="list-group-item d-flex justify-content-between
                aling-items-center
                list-group-item-action"
                 onClick={()=>{
                    router.push(`/users/${usr.id}`)
                }}>
                    <div>
                        <h5>{usr.id} {usr.first_name}{usr.last_name}</h5>
                        <p>{usr.email}</p>
                    </div>
                    <img src={usr.avatar} alt={usr.email}
                    style={{borderRadius: "50%"}}
                    />

                </li>
            
             )) }
    </ul>
  )
}

export default Users