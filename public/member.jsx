var {Component} = React;
class Member extends Component{
    member_register=()=>{
        var name = this.name.value;
        var id = this.id.value;
        var pw = this.pw.value;
        alert(name + id + pw);
        axios.post('member/register',
        {
            name: name, 
            id: id,
            pw: pw
        })
        .then((response)=>{
            console.log(response)
        })
        .catch();
        
    }
    render(){
        return(
            <div>
                name<input type="text" ref={ref=>this.name=ref} /><br/>
                id<input type="text" ref={ref=>this.id=ref}/><br/>
                pw<input type="text" ref={ref=>this.pw=ref}/><br/>
                <button onClick={this.member_register}>
                    가입
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Member/>,
    document.getElementById("here")
);