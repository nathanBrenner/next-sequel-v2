import { gql, useMutation, useQuery } from '@apollo/client'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { loading, error, data } = useQuery(users)

  return (
    <div>
      <>
        {loading ? <p>loading...</p> : error ? <p>error: {error}</p> : (
          <ul>
            {data.users.map(user => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        )}
        <UserForm />
      </>
    </div>
  )
}

function UserForm() {
  const { register, handleSubmit, reset } = useForm()
  const [addUser] = useMutation(createUser, {
    refetchQueries: [
      users
    ]
  })
  const onSubmit = data => {
    addUser({
      variables: data,
    })

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="first name" {...register('createUserFirstName')} />
      <input placeholder="last name" {...register('createUserLastName')} />
      <input placeholder="email" {...register('createUserEmail')} />
      <button>submit</button>
    </form>
  )
}

const users = gql`
  query Users {
    users {
      firstName
      id
      lastName
    }
  }
`

const createUser = gql`
  mutation createUser($createUserFirstName: String!, $createUserLastName: String!, $createUserEmail: String!) {
    createUser(firstName: $createUserFirstName, lastName: $createUserLastName, email: $createUserEmail) {
      id
      firstName
    }
  }
`