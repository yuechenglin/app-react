import React from 'react'
import fetchData from '../util/util.fetch.js'
class BoardMain extends React.Component {
	constructor(props) {
    super(props)
		 this.state = {
		      list: [<div/>]
	    }
 	}
	
	render() {
		return (
			<div className="m-boardmain">
				<div className="part01">
				  <h2>推荐楼盘</h2>
				  <span>更多></span>
				</div>
				{ this.state.list }
				
			</div>
		)
	}
	
	componentDidMount() {
		let url = '/api/list.php'
		fetchData(url,function (res) {
			console.log(res)
//			let les = res.tuijian.map(val => {
//				//console.log(val.lpname)
//				return (
//					<div className="part02">
//						<img alt="" title="" src=""/>
//						<div className="part02-right">
//							<h3>val.lpname</h3>
//							<span>
//								<span>val.minhouse</span><span>-</span><span>val.maxhouse</span> <span>㎡</span> <span>|</span> <span>val.minroom</span><span>-</span><span>val.maxroom</span><span>室</span>
//							</span>
//						</div>
//					</div>
//				)
//			})
		}.bind(this))
		
		this.setState({
//	        list: les
	    })
		
	}
	
}

export default BoardMain
