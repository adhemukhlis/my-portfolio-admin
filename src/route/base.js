import React, {Component} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {rootRef} from "../_firebase/firebaseRef"
class App extends Component {

    state = {
        username: '',
        password: '',
        accesskey:'',
        website_url:'',
        fullname:''
    }
    componentDidMount(){
      const content = {
        username: 'adhemukhlis',
        password: '123456',
        accesskey: 'akjfiue-872325',
        website_url: 'http://localhost:3000/',
        fullname: 'Mukhlis Adhe Purwanto'
      };
      // rootRef.child( "accesskey" ).child("akjfiue-872325").set( {
      //   username: 'adhemukhlis'} )
      rootRef.child('user/adhemukhlis').once('value',snap=>{
        this.setState({
          username:snap.val().username,
          accesskey:snap.val().accesskey,
          website_url:snap.val().website_url,
          fullname:snap.val().fullname
        })
      })
    }
    onFinish = values => {
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
        console.log(e.target.value)
    }
    render() {
        const {username, accesskey, website_url,fullname} = this.state
        const layout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 16
            }
        };
        const tailLayout = {
            wrapperCol: {
                offset: 4,
                span: 16
            }
        };

        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                    remember: true
                }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Please input your username!'
                        }
                    ]}>
                        <Input name="username" onChange={this.onChange}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}>
                        <Input.Password name="password" onChange={this.onChange}/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <h1>My Portfolio Admin</h1>
                <Form.Item label="Username">
                    <Input
                        size="large"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        {...(username!=='' ? {value: username} : {})}/>
                </Form.Item>
                <Form.Item label="AccessKey">
                    <Input
                        size="large"
                        name="accesskey"
                        onChange={this.onChange}
                        {...(accesskey!=='' ? {value: accesskey} : {})}/>
                </Form.Item>
                <Form.Item label="Website URL">
                    <Input
                        size="large"
                        name="website_url"
                        onChange={this.onChange}
                        {...(website_url!=='' ? {value: website_url} : {})}/>
                </Form.Item>
                <Form.Item label="Fullname">
                    <Input
                        size="large"
                        name="fullname"
                        onChange={this.onChange}
                        {...(fullname!=='' ? {value: fullname} : {})}/>
                </Form.Item>
            </div>
        );
    }

}

export default App;
