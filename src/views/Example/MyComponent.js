import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        jobs: [
            { id: 'jobID1', title: 'Tech Lead', salary: '1000' },
            { id: 'jobID2', title: 'Developer', salary: '800' },
            { id: 'jobID3', title: 'Tester', salary: '500' }
        ]
    }

    addNewJob = (job) => {
        console.log('>>> Check job input from parent', job);
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }


    render() {
        console.log('Call render() >>> ', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    jobs={this.state.jobs}
                />

            </>
        )
    }
}

export default MyComponent;