import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class Mycomponent extends React.Component {np
//     state = {
//         ListUser: [
//             { id: 1, name: "khiem", age: "14" },
//             { id: 2, name: "ya", age: "12" },
//             { id: 3, name: "nhi", age: "16" },
//             { id: 4, name: "bee", age: "17" },
//         ]
//     }
//     handlAddNewUser = (userObj) => {
//         console.log(userObj)
//         this.setState({
//             ListUser: [userObj, ...this.state.ListUser]
//         })
//     }
//     handlDeleteUser = (userId) => {
//         let ListUserClone = this.state.ListUser;
//         ListUserClone = ListUserClone.filter(item => item.id !== userId)
//         this.setState({
//             ListUser: ListUserClone
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <AddUserInfor
//                     handlAddNewUser={this.handlAddNewUser}
//                 />
//                 <br></br>
//                 <DisplayInfor ListUser={this.state.ListUser}
//                     handlDeleteUser={this.handlDeleteUser}

//                 />

//             </div>
//         )
//     }
// }
const Mycomponent = (props) => {
    const { ListUser } = props;
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "khiem", age: "14" },
            { id: 2, name: "ya", age: "12" },
            { id: 3, name: "nhi", age: "16" },
            { id: 4, name: "bee", age: "17" },
        ]
    )

    const handlAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handlDeleteUser = (userId) => {
        let ListUserClone = listUsers;
        ListUserClone = ListUserClone.filter(item => item.id !== userId)
        setListUsers(ListUserClone);
    }
    return (
        <div>
            <AddUserInfor
                handlAddNewUser={handlAddNewUser}
            />
            <br></br>
            <DisplayInfor ListUser={listUsers}
                handlDeleteUser={handlDeleteUser}

            />

        </div>
    )
}
export default Mycomponent;