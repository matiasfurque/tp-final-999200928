import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"


const Aside = () => {
  const [search, setSearch] = useState("")

  const { users, handleSelectedUserId, selectedUser } = useContext(ChatContext)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <aside>
      <h1>Chat de Futbol ⚽</h1>

      <input
        className="search"
        type="search"
        placeholder="Buscar contactos..."
        onChange={handleChange}
      />

      {
        filteredUsers.length === 0 &&
        <p className="not-found-text">No se encontraron contactos</p>
      }

      <ul>
        {
          filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => handleSelectedUserId(user.id)} 
              className={selectedUser?.id === user.id ? "active" : ""}
            >
              <img src={user.image} alt="" />
              <div>
                {user.firstName} {user.lastName}
                <br />
                <small className="address-aside">
                  {user.address.country}
                </small>
              </div>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export { Aside }