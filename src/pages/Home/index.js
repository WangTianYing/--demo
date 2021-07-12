import React, {Component} from "react";
import {HashRouter as Router, withRouter,Link} from 'react-router-dom';


class Index extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}
    render() {
        return (
            <div>地图</div>
        );
    }
}

export default withRouter(Index);
