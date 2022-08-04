import React,{ Component } from "react";

class Card extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
               <img alt="robots" src={`https://robohash.org/${this.props.id}?100X100`} />
              <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
              </div>
            </div>
        );
    }
}
 


export default Card;