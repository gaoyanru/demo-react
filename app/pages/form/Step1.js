import React, { Component } from "react";
import { Form, Input, Field  } from '@bone/bone-web-ui'
const FormItem = Form.Item
class Main extends Component {
  constructor (props) {
    super(props)
    this.field = new Field(this)
  } 
  render () {
    const init = this.field.init
    const formItemLayout = {
      labelCol: {
        fixedSpan: 10
      },
      wrapperCol: {
        span: 14
      }
    }
    return (
      <Form direction="ver" field={this.field} >
          <FormItem label="应用名称：" required {...formItemLayout}>
            <Input htmlType="password" {...init('pass')} placeholder="请输入应用名称"/>
          </FormItem>
          <FormItem label="应用简介：" {...formItemLayout} help="随便写点什么">
            <Input multiple placeholder="应用简介" {...init('remark')} />
          </FormItem>
      </Form>
    )
  }
}
export default Main