import React from 'react';
import './menu-item.styles.scss';
import { withRouter} from 'react-router-dom';
 const HomepageCard = ({ title, picture, size, link,history }) =>
  (<div className={`${size} menu-item`} onClick={()=>history.push(`${link}`)} >
    <div style={{ backgroundImage: `url(${picture})` }} className="Background-image"/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle"  >Shop Now</span>
    </div>
  </div>

  )

  export default withRouter(HomepageCard)