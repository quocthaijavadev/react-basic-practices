import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        jobs: [
            { id: 'jobID1', title: 'Project Manager', salary: '3000' },
            { id: 'jobID2', title: 'Technical Lead', salary: '2000' },
            { id: 'jobID3', title: 'Java Developer', salary: '1000' },
            { id: 'jobID4', title: 'Tester', salary: '500' }
        ]
    }

    addNewJob = (job) => {
        console.log('>>> Check job input from parent', job);
        let currentJobs = this.state.jobs;
        currentJobs.push(job);
        this.setState({
            // jobs: [...this.state.jobs, job]
            jobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.jobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            jobs: currentJobs
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
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}

export default MyComponent;