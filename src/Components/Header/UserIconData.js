import React from 'react'

const UserIconData = () => {
  return (
    <div className="dropdown text-end btn text-dark">
    <p
      href="/"
      className="d-block link-dark text-decoration-none dropdown-toggle mb-0"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://github.com/mdo.png"
        alt="mdo"
        width="24 "
        height="24"
        className="rounded-circle m-2 "
      />
    </p>
    <ul
      className="dropdown-menu text-small"
      aria-labelledby="dropdownUser1"
    >
      <li>
        <a className="dropdown-item" href="#">
          Orders
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Profile
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Sign out
        </a>
      </li>
    </ul>
  </div>
  )
}

export default UserIconData