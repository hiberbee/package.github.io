import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { Logo } from 'src/components/Logo/Logo'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

type Props = { children?: React.ReactNode }

export default function DefaultLayout(props: Props): React.ReactElement {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header>
        <Menu defaultOpenKeys={['search']} theme={'dark'} mode={'horizontal'}>
          <Menu.Item key={'search'}>
            <Link to="/">Search</Link>
          </Menu.Item>
          <Menu.Item key={'api'}>
            <Link to="/api">API</Link>
          </Menu.Item>
          <Menu.Item key={'plugins'}>
            <Link to="/plugins">Plugins</Link>
          </Menu.Item>
        </Menu>
        <Logo />
      </Layout.Header>
      <Layout.Content style={{ padding: 20 }}>
        <PageErrorBoundary>{props.children}</PageErrorBoundary>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        Hiberbee © {new Date().getFullYear()}. Open-source @{' '}
        <a href="https://github.com/hiberbee/template-typescript-react-ant" target={'_blank'} rel="noopener noreferrer">
          Github
        </a>
      </Layout.Footer>
    </Layout>
  )
}
