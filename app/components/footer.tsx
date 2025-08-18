import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-[#0B227D] text-white">
            <div className="w-6xl mx-auto  flex justify-between py-15">
                <div>
                    <Image src={'/logo2.png'} width={190} height={62} alt=""></Image>
                    <div className="font-bold uppercase text-2xl">Inception - Writing Consultancy Platform</div>
                </div>
                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex gap-2 items-center">
                        <Image src={'/home.svg'} alt="" width={24} height={24}></Image>
                        <span>Tầng 4, số 4, ngõ 48 Nguyễn Chánh,  Yên Hòa, Hà Nội</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src={'/tel.svg'} alt="" width={24} height={24}></Image>
                        <span>0947.995.245</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src={'/mail.svg'} alt="" width={24} height={24}></Image>
                        <span>info@i-inception.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}