
'use client'

import Image from "next/image"
import React, { useState } from "react"
import { Avilock } from "./fonts"
import Modal from "./modal"

export default function Header2() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [errorInput, setErroInput] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = async () => {
        console.log(name, phone)
        if (!/^\d{0,10}$/.test(phone)) { // chỉ cho nhập tối đa 10 số
            setErroInput("Phải nhập đúng số điện thoại")
            return;
        } else {
            setErroInput("")
        }
        setShowModal(true)
    }

    return (
        <div className="w-full p-10 pb-0 border-b-12 ">
            <div className="max-w-6xl mx-auto flex justify-between items-center gap-20 relative pb-40">
                <div className="flex flex-col sm:max-w-1/2 gap-5">
                    <div className="sm:p-4 p-2 rounded-full border w-fit mx-auto sm:mx-0 mb-5">Workshop trực tuyến qua Zoom</div>
                    <div className={`font-semibold sm:text-7xl text-5xl uppercase text-center sm:text-left ${Avilock.className}`}>cẩm nang du học mỹ</div>
                    <div className="sm:text-xl text-base font-semibold">CHIẾN LƯỢC XÂY DỰNG HỒ SƠ VÀ BÀI LUẬN</div>

                    <div className="text-lg font-light">
                        Buổi chia sẻ thực chiến dành cho học sinh Việt Nam,  cung cấp định hướng rõ ràng về các bước chuẩn bị, chiến lược xây dựng hồ sơ và kỹ năng viết bài luận giúp chinh phục học bổng Mỹ.
                    </div>

                    <div>
                        <div className="flex items-center gap-1 text-lg" >
                            <Image src={'/list-point.png'} alt="." width={20} height={40} />
                            <div>Khung chiến lược xây dựng hồ sơ săn học bổng Mỹ</div>
                        </div>
                        <div className="flex items-center gap-1" >
                            <Image src={'/list-point.png'} alt="." width={20} height={40} />
                            <div>Những lưu ý khi viết luận săn học bổng</div>
                        </div>
                        <div className="flex items-center gap-1" >
                            <Image src={'/list-point.png'} alt="." width={20} height={40} />
                            <div>Casestudy: Học sinh Inception đã giành học bổng</div>
                        </div>
                    </div>

                    <div className="flex justify-between *:text-center ">
                        <div>
                            <div className="font-semibold">Ngày</div>
                            <div>14.09.2025</div>
                        </div>
                        <div className="w-px h-[50px] bg-[#132478] border border-[#132478]"></div>
                        <div>
                            <div className="font-semibold">Thời gian</div>
                            <div>20h00 - 21h30</div>
                        </div>
                        <div className="w-px h-[50px] bg-[#132478] border border-[#132478]"></div>
                        <div>
                            <div className="font-semibold">Nền tảng</div>
                            <div>Zoom Online</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-w-1/2 gap-5 w-sm " id="register-form">
                    <div className={`font-semibold sm:text-6xl text-5xl uppercase text-center ${Avilock.className}`}>Đăng Ký Tham Dự</div>
                    <div>
                        <input type="text" placeholder="Họ và tên"
                            className="p-4 border border-[#132478] rounded-lg w-full"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="text" placeholder="Số điện thoại"
                            className="p-4 border border-[#132478] rounded-lg w-full"
                            value={phone}
                            onChange={(e) => {
                                const value = e.target.value;
                                //check if number
                                setPhone(value);
                            }} />
                    </div>
                    {errorInput && (
                        <div className="text-red-900">{errorInput}</div>
                    )}
                    <div className="w-84 py-4 text-center bg-[#132478] text-white capitalize m-auto rounded-lg font-semibold cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Nhận Link Zoom
                    </div>
                </div>
                <div className="absolute bottom-0 left-[45%] shadow-[0_4px_1px_-1px_#132478]">
                    <Image src={'/something.png'} alt="something" width={475} height={246}></Image>
                </div>
            </div>
            {showModal && (
                <Modal
                    title="Link Zoom"
                    content="Hãy dùng link sau để tham gia zoom: https://us06web.zoom.us/j/86027091797?pwd=3N5MKbA1pPZAmbZJcGOc208IiAuRJv.1"
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}
