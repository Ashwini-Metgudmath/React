import React from "react"

class DatafromAPI extends React.Component{
    constructor(){
        super()
        this.state = {
            data : [],
            loading : false
        }
    }

    componentDidMount(){
        this.setState({loading : true})
        fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                data:data.results,
                loading : false
            })
        })
    }

    render(){
        let loadingText = this.state.loading && "Loading.." 
        console.log(this.state.data);
    const dataItems = this.state.data.map((item, i)=> <li key={i}>{i} {item.name}<span> </span> {item.height}</li>)
        return(
            <div>
                <h2>{loadingText}</h2>
                <ul>{dataItems}</ul>
            </div>
        )
    }
}

export default DatafromAPI