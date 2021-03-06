import React from 'react';
// sync step across pages
import { inject, observer } from 'mobx-react';
// antd js and css
import { Menu, Icon, Badge } from 'antd';

@inject('global_store')
@observer
class MenuSider extends React.Component {
  render() {
    const stepForViewer = this.props.global_store.step+1;
    const calType = this.props.global_store.calculator
      ? (
        <span>
          <Badge status="success" />
          {this.props.global_store.calculator}
        </span>
      )
      : ( 
        <span>
          <Badge status="error" />
          &nbsp;&nbsp;&nbsp;&nbsp;...
        </span>
      );
    const calMode = this.props.global_store.mode
      ? (
        <span>
          <Badge status="success" />
          {this.props.global_store.mode}
        </span>
      )
      : ( 
        <span>
          <Badge status="error" />
          &nbsp;&nbsp;&nbsp;&nbsp;...
        </span>
      );
    return (
      <Menu
        mode="inline"
        selectable={false}
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
      >
        <Menu.Item
          key="1"
          style={{
            cursor:"default",
            fontWeight:"600",
          }}>
          Currently at Step {stepForViewer}
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            cursor:"default",
          }}>
          <span><Icon type="dashboard" /></span>
          Calculator selected is:
        </Menu.Item>
        <Menu.Item
          key="caltype"
          style={{
            cursor:"default",
          }}>
          {calType}
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{
            cursor:"default",
          }}>
          <span><Icon type="fork" /></span>
          Calculation mode:
        </Menu.Item>
        <Menu.Item
          key="calmode"
          style={{
            cursor:"default",
          }}>
          {calMode}
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{
            cursor:"default",
          }}>
          <span><Icon type="form" /></span>
          Inputs:
        </Menu.Item>
        <Menu.Item
          key="inputs"
          style={{
            cursor:"default",
          }}>
          <span>
            <Badge status="error" />
            &nbsp;&nbsp;&nbsp;&nbsp;...
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuSider;
