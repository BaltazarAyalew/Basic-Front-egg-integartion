

 const UserCard = ({user, logout, handleClick}) => {
    return (
        <div className='card'>
        <div>
          <img src={user?.profilePictureUrl} alt={user?.name} />
        </div>
        <div className="detail">
          <span className="heading">Name: {user?.name}</span>
          <span className="heading">Name: {user?.email}</span>
        </div>
        <div>
          <button
          onClick={() => logout()}
          className="button">Click to logout</button>
          <button
          onClick={() => handleClick()}
          className="button">Settings</button>
        </div>
      </div>
    )
}

export default UserCard