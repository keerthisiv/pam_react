var React = require('react');
var Button = require('./button');
var VisitDetail = require('./visit-details');
var CompletedDate = require('./completed-date');

var Hello = React.createClass({
  getInitialState: function() {
    return {
      styleName: 'btn btn-primary',
      name: 'Start',
      visitId: '2291152',
      location: '7 Eleven',
      completedDate: 'hidden'
    };
  },

  buttonClicked: function(){
    if (this.state.name == 'Start') {
      this.setState({
        styleName: 'btn btn-warning',
        name: 'Cancel',
        completedDate: 'show'
      });
    } else {
      this.setState({
      styleName: 'btn btn-primary',
      name: 'Start',
      completedDate: 'hidden'
    });
    }
  },

  render: function() {
    return (
      <div>
        <Button whenClicked={this.buttonClicked} styleName={this.state.styleName} name={this.state.name} />
        <VisitDetail visitId={this.state.visitId} location={this.state.location} />
        { this.state.completedDate == 'show' ? <CompletedDate /> : null }
      </div>
    );
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
