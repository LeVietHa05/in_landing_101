import Image from "next/image"
import { Avilock } from "./fonts"
const lists = [
    {
        id: 1,
        name: "Mentor Vũ Linh Chi",
        job: "Admissions Strategist",
        experiment: "8+ năm kinh nghiệm xây dựng hồ sơ săn học bổng",
        decription: "Hỗ trợ học sinh giành học bổng tại các trường top như: MIT (#2NU), Dartmouth College (Ivy League), University of Chicago (#11NU),...",
        imgSrc: "/vulinhchi.png",
        imgAlt: "tac gia 1",
        imgWidth: 80,
        imgHeight: 80,
    },
    {
        id: 2,
        name: "Mentor nguyễn công trung",
        job: "Essay Mentor",
        experiment: "8+ năm kinh nghiệm hướng dẫn viết luận săn học bổng",
        decription: "Tác giả của cuốn sách 'Bàn Luận Du Học'",
        imgSrc: "/nguyencongtrung.png",
        imgAlt: "tac gia 2",
        imgWidth: 80,
        imgHeight: 80,
    },
]

export default function Spokenman() {
    return (
        <div className="w-full sm:p-20 px-2 py-10">
            <div className="max-w-6xl mx-auto">
                <div className={`${Avilock.className} uppercase sm:text-7xl text-6xl  font-bold text-center sm:mb-15 my-5`}>diễn giả workshop</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {lists.map(p => {
                        return (
                            <div key={p.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 py-6 border border-[#132478] rounded-2xl">
                                <div className="sm:w-1/6">
                                    <Image src={p.imgSrc} alt={p.imgAlt} width={p.imgWidth} height={p.imgHeight}></Image>
                                </div>
                                <div className="w-5/6 font-light text-xs flex flex-col gap-1 text-center sm:text-left">
                                    <div className={`font-bold uppercase text-4xl ${Avilock.className}`}>{p.name}</div>
                                    <div className="font-base text-base">{p.job}</div>
                                    <div className="mt-2">{p.experiment}</div>
                                    <div className="leading-5">{p.decription}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}