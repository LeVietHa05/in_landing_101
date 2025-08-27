
'use client'

import Image from "next/image"
import React, { useState } from "react"
import { Avilock } from "./fonts"
import useFacebookPixel from "../hooks/useFacebookPixel"

export default function Header() {
    const { trackEvent} = useFacebookPixel("618937683888293")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [school, setSchool] = useState("")
    const [ques, setQues] = useState("")
    const [errorInput, setErroInput] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async () => {
        console.log(name, phone, school, ques)
        if (!/^\d{0,10}$/.test(phone)) { // chỉ cho nhập tối đa 10 số 
            setErroInput("Phải nhập đúng số điện thoại")
            return;
        } else {
            setErroInput("")
        }
        
        try {
            setStatus("loading");
            
            const res = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    school,
                    ques,
                }),
            });
            
            const data = await res.json();
            console.log(data);
            
            if (data.result == "success") {
                setStatus("success");
                trackEvent("Lead", {name, phone, school, ques});
            } else {
                setStatus("idle");
                setErroInput("Gửi thất bại, thử lại!");
            }
        } catch (err) {
            setStatus("idle");
            setErroInput("Có lỗi xảy ra!");
        }
    };


    return (
        <div className="w-full sm:p-10 p-6 sm:pb-0">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-20 relative sm:pb-40 pb-4">
                <div className="flex flex-col sm:max-w-1/2 gap-5">
                    <div className="sm:p-4 p-2 rounded-full border w-fit mx-auto sm:mx-0 mb-5">Workshop trực tuyến qua Zoom</div>
                    <div className={`font-semibold sm:text-7xl text-5xl uppercase text-center sm:text-left ${Avilock.className}`}>cẩm nang du học mỹ</div>
                    <div className="sm:text-xl text-base font-semibold">CHIẾN LƯỢC XÂY DỰNG HỒ SƠ VÀ BÀI LUẬN</div>

                    <div className="sm:text-lg font-light">
                        Buổi chia sẻ thực chiến dành cho học sinh Việt Nam,  cung cấp định hướng rõ ràng về các bước chuẩn bị, chiến lược xây dựng hồ sơ và kỹ năng viết bài luận giúp chinh phục học bổng Mỹ.
                    </div>

                    <div>
                        <div className="flex items-center gap-1" >
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
                <div className="flex flex-col sm:max-w-1/2 gap-5 w-sm " id="register-form">
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
                    <div>
                        <input type="text" placeholder="Trường của học sinh"
                            className="p-4 border border-[#132478] rounded-lg w-full"
                            value={school}
                            onChange={(e) => { setSchool(e.target.value) }} />
                    </div>
                    <div>
                        <input type="text" placeholder="Câu hỏi cần giải đáp"
                            className="p-4 border border-[#132478] rounded-lg w-full"
                            value={ques}
                            onChange={(e) => { setQues(e.target.value) }} />
                    </div>
                    {errorInput && (
                        <div className="text-red-900">{errorInput}</div>
                    )}
                    <button
                        className={`w-84 mx-auto py-4 text-center rounded-lg font-semibold text-white transition-all duration-200 cursor-pointer
                            ${status === "success"
                            ? "bg-green-600"
                            : status === "loading"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#132478] hover:bg-[#1e3a8a]"
                            }`}
                        onClick={handleSubmit}
                        disabled={status === "loading" || status === "success"}
                    >
                        {status === "loading"
                            ? "Đang gửi..."
                            : status === "success"
                                ? "Đã gửi"
                                : "Gửi Đăng Ký"}
                    </button>
                </div>
                <div className="absolute bottom-0 left-[45%] shadow-[0_4px_1px_-1px_#132478] sm:block hidden">
                    <Image src={'/something.png'} alt="something" width={475} height={246}></Image>
                </div>
            </div>
        </div>
    )
}