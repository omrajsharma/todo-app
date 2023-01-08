import React from 'react'
import './Header.css'

function Header() {
  const date = new Date();
  const dateNumber = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className='header'>
      <div className="header-container">
        <div className="header_day">
          <div className="header_day__day">
            {days[day]}
          </div>
          <div className="header_day__date">
            {dateNumber + ' ' + months[month] + ' ' + year}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;