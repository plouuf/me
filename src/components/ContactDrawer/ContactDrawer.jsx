import React from 'react';
import { Drawer, Form, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { DrawerSubmit } from '../Navbar/NavbarElements';
import ContactImageSVG from '../../assets/contact.svg';
import { ContactImageWrapper, ContactImage } from './ContactDrawerElements';

const ContactDrawer = ({ isOpen, handleDrawer }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Drawer
      title={
        <p style={{ color: '#ffffff', fontWeight: 600, opacity: '90%' }}>
          Contact Me
        </p>
      }
      placement="right"
      onClose={handleDrawer}
      open={isOpen}
      style={{ background: '#242424', color: '#ffffff' }}
      width={450}
      closeIcon={<CloseOutlined style={{ color: '#fff' }} />}
    >
      <ContactImageWrapper>
        <ContactImage src={ContactImageSVG} alt="contact" />
      </ContactImageWrapper>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 5, style: { color: '#ffffff', opacity: '75%' } }}
      >
        <Form.Item
          label={<span style={{ color: '#ffffff', opacity: '75%' }}>Name</span>}
          // label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
          style={{ paddingBottom: '1.5rem' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          // label="Email"
          label={
            <span style={{ color: '#ffffff', opacity: '75%' }}>Email</span>
          }
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter a valid email address',
            },
          ]}
          style={{ paddingBottom: '1.5rem' }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: '#ffffff', opacity: '75%' }}>Message</span>
          }
          // label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter a message' }]}
          style={{ paddingBottom: '1.5rem' }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <DrawerSubmit htmlType="submit">Send</DrawerSubmit>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ContactDrawer;
