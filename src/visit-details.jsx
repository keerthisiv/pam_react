var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <h3>{this.props.visitId} - {this.props.location}</h3>
  }
});
