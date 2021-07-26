const React = require('react');
const ReactDOM = require('react-dom');

class Application extends React.Component {
    render() {
        return (
            <div>
                <h1>Dev support project</h1>
                <h3>This project has intention to provide some utils for developers that may help them during their work.</h3>
                <h3>Please check available utils in site menu above.</h3>
            </div>
        )
    }
}

window.renderAbout = function (containerId) {
    ReactDOM.render(<Application/>, document.getElementById(containerId));
}

window.unmountAbout = function (containerId) {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}
