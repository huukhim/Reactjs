import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
// class DisplayInfor extends React.Component {

//     state = {
//         showlistuser: true

//     }
//     handListUser = () => {
//         this.setState({
//             showlistuser: !this.state.showlistuser
//         })
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('>>> call me component did update', this.props, prevProps)
//         if (this.props.listUsers != prevProps.listUsers) {
//             if (this.props.listUsers.length === 5   ) {
//                 alert('You got 5 users')
//             }
//         }
//     }

//     render() {
//         console.log(this.props)
//         const { ListUser } = this.props;
//         console.log(ListUser)
//         //props 


//         return (
//             <div className="display-infor-container">
//                 <div>
//                     <span onClick={() => { this.handListUser() }}>{this.state.showlistuser === true ? "an" : "hien"}</span>
//                 </div>
//                 {this.state.showlistuser &&
//                     <div>
//                         {ListUser.map((user) => {
//                             return (
//                                 <div style={{ display: "flex" }} key={user.id} className={+user.age >= 14 ? "green" : "red"} >
//                                     <>
//                                         <div>ten la {user.name} </div>
//                                         <div>age {user.age}</div>
//                                     </>
//                                     <div style={{ marginLeft: "20px" }}>
//                                         <button onClick={() => this.props.handlDeleteUser(user.id)}>X</button>
//                                     </div>
//                                     <hr />

//                                 </div>
//                             )
//                         }
//                         )}

//                     </div>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { ListUser } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowListUser = () => {
    }
    // <=> this.state{
    //    isShowHideListUser: true
    // }

    console.log("call me rander")
    useEffect(() => {
        if (ListUser.length === 0) {
            alert("hii")
        }
        console.log("call me effect")
    }, [ListUser]
    );
    return (
        <div className="display-infor-container">
            <div>
                <>show list users</>
            </div>
            {/* <div>
                <span onClick={() => { this.handListUser() }}>{this.state.showlistuser === true ? "an" : "hien"}</span>
            </div> */}
            {isShowHideListUser &&
                <>
                    {ListUser.map((user, index) => {
                        return (

                            <div style={{ display: "flex" }} key={user.id} className={+user.age >= 14 ? "green" : "red"} >
                                <>
                                    <div>ten la {user.name} </div>
                                    <div>age {user.age}</div>
                                </>
                                <div style={{ marginLeft: "20px" }}>
                                    <button onClick={() => props.handlDeleteUser(user.id)}>X</button>
                                </div>
                                <hr />

                            </div>
                        )
                    }
                    )}

                </>
            }
        </div>
    )
}
export default DisplayInfor;