import { Button, Form, Input, Select } from 'antd'
import React from 'react'

type Props = {}

function CreateUser({}: Props) {
  return (
    <div className='container w-50'>
       <div className='text-center mb-3 text-3xl font-bold'>Thêm Người Dùng</div>
    <div>
      <Form>
        <div className="flex gap-3 mb-3">
          <div className="group_form w-1/2">
                 <label htmlFor="">Tài Khoản:</label>
          <Input placeholder="Mời bạn nhập tài khoản" />
        </div>
        <div className="group_form w-1/2">
                 <label htmlFor="">Mật Khẩu	:</label>
          <Input placeholder="Mời bạn nhập mật khẩu" />
        </div>
        </div>
        
        <div className="group_form mb-3">
                 <label htmlFor="">	Họ Tên:</label>
          <Input placeholder="Mời bạn nhập họ tên" />
        </div>
        <div className="group_form mb-3">
                 <label htmlFor="">Số Điện Thoại:</label>
          <Input placeholder="Mời bạn nhập số điện thoại" />
        </div>
        <div className="flex gap-3 mb-3">
        <div className="group_form w-50">
                 <label htmlFor="">Email:</label>
          <Input placeholder="Mời bạn nhập email" />
        </div>
        <div className="group_form">
                 <label htmlFor="">Loại Người Dùng:</label> <br />
                 <Select
      defaultValue="Mời bạn chọn người dùng"
    className='w-[400px]'
  
      options={[
        {
          value: 'khachhang',
          label: 'Khách Hàng',
        },
        {
          value: 'admin',
          label: 'admin',
        },
       
      ]}
    />
        </div>
       
    </div>
    <div className="flex gap-3">
          <Button htmlType="submit">
                        Thêm tài khoản
                    </Button>
        <Button htmlType="submit">
                        Quay Lại
                    </Button>
             
    </div>
    

      </Form>
  
    </div>
    </div>
   
  )
}

export default CreateUser



