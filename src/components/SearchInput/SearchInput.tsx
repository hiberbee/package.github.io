import React from 'react'
import { AutoComplete, Tag, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons/lib'
import './SearchInput.css'

export function SearchInput(): React.ReactElement {
  const renderTitle = (title: string) => {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          more
        </a>
      </span>
    )
  }

  const renderItem = (title: string, count: number) => {
    return {
      value: title,
      label: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {title}
          <span>
            <UserOutlined /> {count}
          </span>
        </div>
      ),
    }
  }

  const options = [
    {
      label: renderTitle('Docker'),
      options: [renderItem('library/node:14', 10000), renderItem('bitnami/node:14', 10600)],
    },
    {
      label: renderTitle('Java'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('JavaScript'),
      options: [renderItem('AntDesign design language', 100000)],
    },
  ]

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: '45%',
          left: '15%',
        }}
      >
        <Tag>Java</Tag>
        <Tag>Docker</Tag>
        <Tag>JavaScript</Tag>
      </div>
      <AutoComplete
        dropdownMatchSelectWidth={500}
        style={{
          position: 'fixed',
          top: '48%',
          left: '15%',
          width: '70%',
          margin: '0 auto',
        }}
        options={options}
      >
        <Input.Search size="large" placeholder="Search for package" />
      </AutoComplete>
    </div>
  )
}
