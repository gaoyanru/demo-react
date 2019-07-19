import React, { Component } from "react";
import { Form, Select, Field  } from '@bone/bone-web-ui'
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
          <FormItem label="模版：" {...formItemLayout}>
            <Select>
              <div value="1">模版1</div>
              <div value="2">模版2</div>
              <div value="3">模版3</div>
            </Select>
          </FormItem>
      </Form>
    )
  }
}
export default Main