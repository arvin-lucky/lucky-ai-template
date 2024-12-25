import '@/styles/globals.css';

import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Lucky AI Template',
	description: 'A template for AI projects',
};

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
	overflow: 'auto',
	height: '100vh',
	position: 'fixed',
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: 'thin',
	scrollbarGutter: 'stable',
};

const items: MenuProps['items'] = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,
	AppstoreOutlined,
	TeamOutlined,
	ShopOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));

const RootLayout = ({ children }: React.PropsWithChildren) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<html lang="en">
			<body>
				<AntdRegistry>
					<Layout hasSider>
						<Sider style={siderStyle}>
							<div className="demo-logo-vertical" />
							<Menu
								theme="dark"
								mode="inline"
								defaultSelectedKeys={['4']}
								items={items}
							/>
						</Sider>
						<Layout style={{ marginInlineStart: 200 }}>
							<Header style={{ padding: 0, background: colorBgContainer }} />
							<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
								<div
									style={{
										padding: 24,
										textAlign: 'center',
										background: colorBgContainer,
										borderRadius: borderRadiusLG,
									}}
								>
									{children}
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>
								Ant Design ©{new Date().getFullYear()} Created by Ant UED
							</Footer>
						</Layout>
					</Layout>
				</AntdRegistry>
			</body>
		</html>
	);
};

export default RootLayout;
