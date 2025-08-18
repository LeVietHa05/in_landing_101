
import Image from "next/image"

export default function Nav() {
    return (
        <div className="w-full border-b border-gray-200 shadow">
            <div className="w-5xl mx-auto flex justify-between py-4 h-[96px]">
                <Image src={'/logo.png'} alt="logo" width={190} height={62}
                    className=""></Image>
                <div className="font-semibold text-xl rounded-xl bg-[#132478] p-6 text-white flex items-center justify-center">
                    <div>
                        ĐĂNG KÝ NGAY
                    </div>
                </div>
            </div>
        </div>
    )
}