import React, { useEffect, useState } from 'react';
import { Progress, Space } from 'antd';


function IntroForm() {
    // const [num, setNum] = useState(1);
    // useEffect(() => {
    //     const percent = setInterval(() => {
    //         setNum(prev => prev + 1);
    //         if (num === 100) {
    //             return () => clearInterval(percent)
    //         }
    //         console.log(num);
    //     }, 100)
    // }, [])
    return (
        <di className='max-[1200px]:hidden'>
            <h1 className='text-center text-4xl mt-10'>Chất lượng dịch vụ</h1>
            <div className='m-10 rounded-lg h-60  w-auto' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <div className='grid grid-cols-3 mx-auto' >
                    <div className='' style={{ margin: 'auto', lineHeight: '240px' }}>
                        <Space wrap>
                            <Progress type="dashboard" percent={100} />
                        </Space>
                    </div>
                    <div className='mt-4' style={{ margin: 'auto' }}>
                        <Space wrap>
                            <Progress type="dashboard" percent={100} />
                        </Space>
                        {/* <span className='ml-4'>Chat luong</span> */}
                    </div>
                    <div className='mt-4' style={{ margin: 'auto' }}>
                        <Space wrap>
                            <Progress type="dashboard" percent={100} />
                        </Space>
                        {/* <span className='ml-4'>Chat luong</span> */}
                    </div>
                </div>
            </div>
        </di>
    )
}

export default IntroForm;