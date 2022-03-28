import React, {Component} from "react";

// import InputNumber from "elements/Form/InputNumber";

// export default class Example extends Component{
//     state = {
//         value:"1"
//     };

//     handleChange = e => {
//         this.setState({[e.target.name] : e.target.value});
//     };

//     render(){
//         return (
//             <InputNumber
//                 min={1} 
//                 max={30}
//                 suffix=" night"
//                 name={"value"}
//                 isSuffixPlural
//                 value={this.state.value}
//                 onChange={this.handleChange}
//             />
//         );
//     }
// }

import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component{
    

    render(){
        const breadcrumb = [
            { pageTitle : "Home", pageHref : ""},
            { pageTitle : "House Details", pageHref : ""}
        ];

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height : "100vh" }}>
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        );
    }
}


