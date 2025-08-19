
import { Avilock } from "./fonts"

const agenda_items = [
    {
        id: 1,
        time: "00’ - 10’",
        text: "Giải mã hệ thống tuyển sinh và săn học bổng Mỹ"
    },
    {
        id: 2,
        time: "10’ - 25’",
        text: "Chiến lược xây dựng hồ sơ săn học bổng cá nhân hóa"
    },
    {
        id: 3,
        time: "25’ - 40’",
        text: "Cách lựa chọn hoạt động ngoại khóa và hoạt động chuyên ngành phù hợp "
    },
    {
        id: 4,
        time: "40’ - 60’",
        text: "Những lưu ý khi viết luận săn học bổng Mỹ"
    },
    {
        id: 5,
        time: "60’ - 75’",
        text: "Cách thức Inception đồng hành cùng học sinh"
    },
    {
        id: 6,
        time: "75’ - 90’",
        text: "Q&A và tài liệu tóm tắt"
    },
]

export default function Agenda() {
    return (
        <div className="w-full border-t-20 ">
            <div className="w-full h-2.5 bg-[#D9D9D9]"></div>
            <div className="w-full h-1.5 bg-[#132478]"></div>
            <div className="w-full h-0.5 bg-[#D9D9D9]"></div>
            <div className="w-full bg-[#132478] text-white sm:py-20 py-4">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between text-center">
                    <div className="flex flex-col sm:w-3xs w-full">
                        <div className={`sm:text-8xl text-7xl font-bold ${Avilock.className}`}>800+</div>
                        <div>HỌC SINH ĐÃ TRÚNG TUYỂN VÀ GIÀNH HỌC BỔNG</div>
                    </div>
                    <div className="flex flex-col sm:w-3xs w-full">
                        <div className={`sm:text-8xl text-7xl font-bold ${Avilock.className}`}>8+</div>
                        <div>KINH NGHIỆM TƯ VẤN SĂN HỌC BỔNG</div>
                    </div>
                    <div className="flex flex-col sm:w-3xs w-full">
                        <div className={`sm:text-8xl text-7xl font-bold ${Avilock.className}`}>100%</div>
                        <div>HỌC SINH NHẬN HỌC BỔNG, HỖ TRỢ TÀI CHÍNH</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0F9FF] w-full mx-auto">
                <div className="max-w-6xl mx-auto py-10">
                    <div className={`${Avilock.className} font-bold uppercase sm:text-7xl text-center sm:text-left text-6xl pb-10`}>Agenda</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[#0B227D] font-semibold px-2">
                        {agenda_items.map((item) => {
                            return (
                                <div key={item.id}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#fff] border border-[#BBBBBB] h-[62px]"
                                >
                                    <div className="p-4 py-1 rounded-lg bg-[#0B227D] text-white text-center shrink-0">{item.time}</div>
                                    <div className="">{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}