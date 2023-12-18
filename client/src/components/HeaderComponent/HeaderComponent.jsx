import React from 'react'
import { Col } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperUserHeader, WrapperTextHeader12px } from './style'
import Search from 'antd/es/transfer/search'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>Fashion 247</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    // onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px' }}>
                    <WrapperUserHeader>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeader12px>Đăng nhập/Đăng ký</WrapperTextHeader12px>
                            <div>
                                <WrapperTextHeader12px>Tài khoản</WrapperTextHeader12px>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperUserHeader>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                        <WrapperTextHeader12px>Giỏ hàng</WrapperTextHeader12px>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent