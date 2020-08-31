import React, { useState, useEffect } from 'react';
import User, { UserInterface } from "../../components/user";
import axios, { AxiosResponse } from 'axios';

interface ServerResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: UserInterface[],
  ad: any
}

function Users() {
  const [users, updateUsers]: [UserInterface[], any] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response: AxiosResponse = await axios.get('https://reqres.in/api/users')
      const serverResponse: ServerResponse = response.data
      
      updateUsers(serverResponse.data)
    }
    fetchData();
  }, [])
  return (
    <div > {
      users.map((user: UserInterface) => {
        return <User key={user.id} user={user}></User>
      })
    }
    </div >
  )
}

export default Users;
