import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "nhi",
//         address: "bee",
//         age: 12
//     };
//     handleClick = (even) => {
//         console.log("cklick me button")
//         console.log("im", this.state.name, this.state.age)
//         this.setState({
//             name: "nhi",
//             age: Math.floor((Math.random() * 17) + 1)
//         })
//     }

//     handloOnMoverOver(even) {
//         console.log(even.pageX)
//     }

//     handOnChageName = (even) => {
//         this.setState({
//             name: even.target.value
//         })
//     }

//     handOnChageAge = (even) => {
//         this.setState({
//             age: even.target.value
//         })
//     }


//     handleOnsupmit = (even) => {
//         //ngan chan reload trang
//         even.preventDefault();

//         this.props.handlAddNewUser(
//             {
//                 id: Math.floor((Math.random() * 100) + 1) + "-random",
//                 name: this.state.name,
//                 age: this.state.age
//             }
//         );
//     }



//     //jsx
//     render() {
//         return (
//             <div>
//                 my name is {this.state.name + this.state.age}
//                 <label></label>
//                 {/* <button onClick={this.handleClick}> click </button> */}
//                 {/* <button onMouseOver={(even) => { this.handloOnMoverOver(even) }}>hoverClick</button> */}
//                 <form onSubmit={(even) => { this.handleOnsupmit(even) }}>
//                     <label>ten: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(even) => { this.handOnChageName(even) }}></input>

//                     <label>tuoi: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(even) => { this.handOnChageAge(even) }}></input>
//                     <button>Submit</button>
//                 </form>
//             </div>

//         )
//     }
// }

const AddUserInfor = (props) => {

    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [age, setage] = useState("");

    const handleClick = (even) => {
        console.log("cklick me button")
        console.log("im", this.state.name, this.state.age)
        this.setState({
            name: "nhi",
            age: Math.floor((Math.random() * 17) + 1)
        })
    }

    const handloOnMoverOver = (even) => {
        console.log(even.pageX)
    }

    const handOnChageName = (even) => {
        setname(even.target.value)
    }

    const handOnChageAge = (even) => {
        // this.setState({
        //     age: even.target.value
        // })
        setage(even.target.value)
    }


    const handleOnsupmit = (even) => {
        //ngan chan reload trang
        even.preventDefault();

        props.handlAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + "-random",
                name: name,
                age: age
            }
        );
    }



    return (
        <div>
            my name is {name + age}
            <label></label>
            {/* <button onClick={this.handleClick}> click </button> */}
            {/* <button onMouseOver={(even) => { this.handloOnMoverOver(even) }}>hoverClick</button> */}
            <form onSubmit={(even) => { handleOnsupmit(even) }}>
                <label>ten: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(even) => { handOnChageName(even) }}></input>

                <label>tuoi: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(even) => { handOnChageAge(even) }}></input>
                <button>Submit</button>
            </form>
        </div>

    )
}
export default AddUserInfor;