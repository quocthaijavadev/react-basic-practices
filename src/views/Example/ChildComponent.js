import React from "react";


// Use class component
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { jobs } = this.props;
        let { showJobs } = this.state;
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        // console.log('>>> Check condition: ', check);
        return (
            <>
                {showJobs === false ?
                    < div >
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>

                    :

                    <>
                        <div className="jobs">
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>
        )
    }
}

// Use function component (arrow function)

// const ChildComponent = (props) => {
//     console.log('>>> Child component props: ', props);
//     let { jobs } = props
//     return (
//         <>
//             <div className="jobs">
//                 {
//                     jobs.map((item, index) => {
//                         if (item.salary > 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;