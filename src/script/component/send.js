import React from 'react'

class Send extends React.Component {
	constructor(props) {
	    super(props)
		 this.state = {
	      Frist: [<div/>]    
	    }
	}
	componentWillMount (){
	 let msg = sessionStorage.getItem("userID")
  	 let frist=()=>{}
	    if(msg){
	    	console.log(frist)
      		frist = () => {
      			return (
	      			<div className="frist">
	      					<input className="inpt" type="text" placeholder="请输入或选择小区名称"/>
	      					<input className="inpt" type="text" placeholder="请输入或选择行政街道"/>
	      					
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
	      					
	      					<div className="box3">
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
    		 frist = ()=>{
    			return (
    				<div className="secend">
    					<div>需要您登录才能使用</div>
   					<input type="button" value="登录"/>
    				</div>
    			)
    			
    		}   		
	    }
	    console.log(frist)
	    this.setState({
	       Frist:frist() 
	    }) 
	    console.log(this.state.Frist)
	 }
    render() {
	    return (
	      <div className="m-send">
	       	{this.state.Frist}
	      </div>
	    )
    }
    componentDidMount() {
  
    }
}

export default Send
