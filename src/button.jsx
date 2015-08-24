var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <button onClick={this.props.whenClicked} type="button" className={this.props.styleName}>{this.props.name}</button>
  }
});

