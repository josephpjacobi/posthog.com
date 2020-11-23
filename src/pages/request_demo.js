import React from 'react'
import Layout from '../components/Layout'
import { Col, Form, Input, Button } from 'antd'

const layout = {
    labelCol: { offset: 4, span: 6 },
    wrapperCol: { span: 6 },
}

const RequestDemoForm = ({ title, subtitle, onSubmit }) => {
    return [
        <Col className="header-row" align="middle" key="startup-form-1">
            <h2 id="apply_section">{title}</h2>
            {subtitle && (
                <p className="subtitle" style={{ maxWidth: '70vw' }}>
                    {subtitle}
                </p>
            )}
        </Col>,
        <Col align="middle" key="startup-form-2">
            <Form
                {...layout}
                name="demo-request"
                id="demo-request"
                method="POST"
                onSubmit={onSubmit}
                style={{ maxWidth: '80vw' }}
                data-netlify="true"
            >
                <input type="hidden" name="demo-request" value="demo-request" />
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input id="firstName" required />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input id="lastName" required />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input id="email" required type="email" />
                </Form.Item>
                <Form.Item
                    label="Company"
                    name="company"
                    rules={[{ required: true, message: 'Please input your company!' }]}
                >
                    <Input id="company" required />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <br />
        </Col>,
    ]
}

const RequestDemoPage = () => {
    return (
        <Layout>
            <RequestDemoForm
                title="Request Demo"
                subtitle="Request a demo to get on a call with one of us! We will do a quick product tour to help you get an in deptch review of the product. Afterwards, we'll anwer any questions you might have and help you get started!"
                startup={false}
            />
        </Layout>
    )
}

export default RequestDemoPage
