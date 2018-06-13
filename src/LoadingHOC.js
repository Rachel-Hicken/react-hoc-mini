import React, {Component} from 'react';


export default function LoadingHOC(WrappedComponent){
    return class extends Component{
        render(){
            return(
                <div>
                    {this.props.loading ? '...Loading':<WrappedComponent {...this.props}/>}
                </div>
            )
        }
    }
}
