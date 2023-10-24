import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Modal } from "antd";

import "./style.scss";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="admin-aside"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="admin-logo">{collapsed ? "PTP" : "PTP admin"}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: "/dashboard",
              icon: <UserOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "/skills",
              icon: <VideoCameraOutlined />,
              label: <Link to="/skills">Skills</Link>,
            },
            {
              key: "/portfolios",
              icon: <UploadOutlined />,
              label: <Link to="/portfolios">Portfolios</Link>,
            },
            {
              key: "/experiences",
              icon: <UploadOutlined />,
              label: <Link to="/experiences">Experiences</Link>,
            },
            {
              key: "/education",
              icon: <UploadOutlined />,
              label: <Link to="/education">Education</Link>,
            },
            {
              icon: <UploadOutlined />,
              label: (
                <Button
                  danger
                  type="primary"
                  onClick={() =>
                    Modal.confirm({
                      title: "Do you want to exit ?",
                      onOk: () => {},
                    })
                  }
                >
                  Logout
                </Button>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="admin-header"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="admin-main"
          style={{
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
