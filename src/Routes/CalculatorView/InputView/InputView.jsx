import React from 'react';
// get current step from global_store
import { inject, observer } from 'mobx-react';

@inject('global_store')
@observer
class InputView extends React.Component {
  componentDidMount() {
    this.props.global_store.switchStep(2);
  }

  render() {
    return (
      <h2>here are the inputs, txtx</h2>
    );
  }
}
export default InputView;
