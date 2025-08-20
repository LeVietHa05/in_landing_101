
import Image from "next/image"

export default function Nav() {
    return (
        <div className="w-full border-b border-gray-200 shadow">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-2 sm:px-0 py-0 sm:py-4 sm:h-[96px] h-[64px]">
                <Image src={'/logo.png'} alt="logo" width={190} height={62}
                    className=""></Image>
                <div className="h-fit font-semibold sm:text-xl text-base rounded-xl bg-[#132478] sm:p-4 p-2 text-white flex items-center justify-center">
                    <div>
                        ĐĂNG KÝ NGAY
                    </div>
                </div>
            </div>
        </div>
    )
}