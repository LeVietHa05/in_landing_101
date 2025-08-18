import Image from "next/image"

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
        <div className="w-full p-20">
            <div className="w-6xl mx-auto">
                <div className="uppercase text-6xl font-bold text-center mb-15">diễn giả workshop</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {lists.map(p => {
                        return (
                            <div key={p.id} className="flex gap-4 p-4 py-6 border border-[#132478] rounded-2xl">
                                <div className="w-1/6">
                                    <Image src={p.imgSrc} alt={p.imgAlt} width={p.imgWidth} height={p.imgHeight}></Image>
                                </div>
                                <div className="w-5/6 font-light text-xs flex flex-col gap-1    ">
                                    <div className="font-bold uppercase text-2xl">{p.name}</div>
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