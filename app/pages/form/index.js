import React, { Component } from "react";
import { Steps, Button, Form } from 'antd'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
const { Step } = Steps
const steps = [
  {
    title: '基本信息',
    content: (
      <Step1/>
    )
  },
  {
    title: '应用模板',
    content: (
      <Step2/>
    )
  },
  {
    title: '结果展示',
    content: (
      <Step3/>
    )
  },
]
class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  next () {
    const current = this.state.current + 1
    this.setState({
      current
    })
  }
  prev () {
    const current = this.state.current - 1
    this.setState({
      current
    })
  }
  render () {
    const  { current } = this.state
    console.log(current, 'current')
    return (
      <div>
        <Steps current={current}>
          {
            steps.map((item,index) => {
              return (
                <Step key={index} title={item.title}></Step>
              )
            })
          }
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  下一步
                </Button>
            )
          }
          {
            current === steps.length - 1 && (
                <Button type="primary" onClick={() => {}}>
                  提交
                </Button>
            )
          }
          {
            current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  上一步
                </Button>
            )
          }
        </div>
      </div>
    )
  }
}
export default Main