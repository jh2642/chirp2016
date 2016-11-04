import React from 'react'

class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.updateTimeline = this.updateTimeline.bind(this)
        this.post = this.post.bind(this)
        this.chirpChange = this.chirpChange.bind(this)

        this.state = {
            chirps: [],
            value: ''
        }
    }

    updateTimeline() {
        fetchApi('GET', '/timeline', {}, (response) => {
            this.setState({chirps: response})
        })
    }

    componentDidMount() {
        this.updateTimeline()
    }

    post(e) {
        if (e.key === 'Enter') {
            fetchApi('POST', '/chirps', {body: e.target.value}, (response, statusCode) => {
                //sussessses!
                if (statusCode >= 200 && statusCode < 300) {
                    this.setState({value: ''})
                    this.updateTimeline()

                }
                //failure!
                else {
                    alert('Error with Chirp API. Blame James!')
                }
            })
        }
    }

    chirpChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        var chirps = this.state.chirps.map(function(chirp, i) {
            return <div key={i}>
            <img src={chirp.user.userpic} />, {chirp.user.name},
            {chirp.body}</div>
        })

        return <div>
            <input type="text" placeholder="Chirp" className="form-control" onKeyPress={this.post} value={this.state.value} onChange={this.chirpChange}/>
            {chirps}
        </div>
    }
}

export default Timeline
