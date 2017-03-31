import React from 'react'

class Send extends React.Component {
	constructor(props) {
	    super(props)
		 this.state = {
	      frist: {},
	      secend:{}
	    }
	 }
	componentWillMount (){
	 	
	 }
    render() {
    return (
      <div className="m-send">
       	
      </div>
    )
  }
    componentDidMount() {
  	let  msg = sessionStorage.getItem("userID")
	    if(msg){	
	    		
      		let frist = () => {
	      			return (
		      			<div className="frist">
		      					<input type="text" placeholder="请输入或选择小区名称"/>
		      					<input type="text" placeholder="请输入或选择行政街道"/>
		      					
		      					<div className="box">
		      						<div>
		      							<input type="text"/><span>单元,</span>
		      							<input type="text"/><span>室</span>
		      						</div>
		      						<div>2室2厅1卫∨</div>
		      					</div>
		      					
		      					<div className="box1">
		      						<div><input type="text" placeholder="面积"/>m²</div>
		      						<div>
		      							第<input type="text"/>层,共<input type="text"/>层
		      						</div>
		      						<div>
		      							¥<input type="text" placeholder="实价"/>万
		      						</div>
		      						<select>
		      							<option>精装</option>
		      							<option>豪装</option>
		      							<option>中装</option>
		      							<option>简装</option>
		      							<option>毛培</option>
		      						</select>
		      					</div>
		      					
		      					<div className="box2">
		      						<table>
		      								<tr>
		      									<td>南北</td>
		      									<td>东南北</td>
		      									<td>西南北</td>
		      									<td>南</td>
		      									<td>西</td>
		      								</tr>
		      								<tr>
		      									<td>北</td>
		      									<td>东南</td>
		      									<td>西南</td>
		      									<td>西北</td>
		      									<td>东北</td>
		      								</tr>
		      								<tr>
		      									<td>东</td>
		      									<td>东西</td>
		      								</tr>
		      						</table>
		      					</div>
		      					
		      					<divclassName="box3">
		      						<div>
		      							姓名  <input type="text" placeholder="姓名"/>
		      						</div>
		      						<div>
		      							手机号  <input type="text" placeholder="手机号"/>
		      						</div>
		      					</div>
		      					<input type="button" value="保存"/>
		      			</div>
	      			)
	      		}
      		
	      		
	    }else{
	    		let secend= ()=>{
	    			return (
	    				<div className="secend">
	    					<div>需要您登录才能使用</div>
       					<input type="button" value="登录"/>
	    				</div>
	    			)
	    		}
	      		
	    }
	   
	    
  }
}

export default Send
