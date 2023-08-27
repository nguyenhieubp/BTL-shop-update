import { Button, Checkbox, Form, Input } from "antd";
import UserLayout from "../../admin/layouts/UserLayout";
import { contact } from "../../utils/images";

export default function ContactPage() {
  return (
    <UserLayout>
      <div className="py-28 px-44">
        <div className="text-center font-bold text-5xl">
          Keep In Touch with Us
        </div>
        <div className="border border-solid border-slate-200 mt-16 rounded-md py-14 px-24 grid grid-cols-3 gap-x-6">
          <div className="col-start-1 col-end-3">
            <div className="text-3xl mb-8 font-bold">Sent A Message</div>
            <div>
              <Form
                initialValues={{
                  remember: true,
                }}
                // onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Subject" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.TextArea size="large" placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </Checkbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="login-form-button"
                    style={{
                      backgroundColor: "black",
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="px-4">
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
