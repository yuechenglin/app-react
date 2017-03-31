import React from 'react'
import Carousel from '../../component_dev/carousel/src/'

class Board extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="m-board">
        <div className="swiper">
          <Carousel autoplay={false}>
						 <li className="item"><img className="img" src="http://common.goufang.com/2013/webapp/images/index.jpg" /></li>  
    				 <li className="item"><img className="img" src="http://common.goufang.com/2013/webapp/images/index2.jpg" /></li>  
          </Carousel>
        </div>
        <ul>
          <li>
            <div>
              <b></b>
              <i></i>
            </div>
            <ul>
              <li>
                <i></i>
                <b></b>
              </li>
              <li>
                <i></i>
                <b></b>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }


}

export default Board
