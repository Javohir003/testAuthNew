import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function Profile() {

    const {isAuthenticated, isLoading, user} = useAuth0();

  return (
    <>
      
      <div className='box-user'>
        {isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.given_name} />
                <br />
                <br />
                <h1>{user.given_name}</h1>
                <br />

                <h2>{user.email}</h2>
                <br />

                <h3>{user.updated_at.slice(0, 10)}</h3>
            </div>
        )}
      </div>

    </>
  )
}
