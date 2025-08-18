import Image from "next/image";
import Nav from "./components/nav";
import Header from "./components/header";
import Agenda from "./components/agenda";
import Spokenman from "./components/spokeman";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="text-[#132478]">
      <Nav />
      <Header />
      <Agenda />
      <Spokenman />

      {/* BANNER 1 */}
      <div className="w-full bg-[#0B227D] text-white">
        <div className="w-4xl mx-auto py-15">
          <div className="font-bold text-6xl uppercase pb-12">Phù hợp với</div>
          <div className="flex justify-between font-semibold text-lg">
            <div className="w-4/10">
              HỌC SINH ĐANG TÌM HIỂU CÁCH THỨC SĂN HỌC BỔNG MỸ
            </div>
            <div className="w-px h-[50px] bg-white border border-white"></div>
            <div className="w-4/10">
              PHỤ HUYNH MUỐN NẮM RÕ LỘ TRÌNH VÀ TIÊU CHÍ TUYỂN SINH
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="w-6xl mx-auto py-20">
          <div className="font-bold text-5xl uppercase pb-12">Quà tặng khi tham dự</div>
          <div className="flex justify-between">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-1" >
                <Image src={'/list-point.png'} alt="." width={20} height={40} />
                <div>
                  Ebook Chiến Lược Chinh Phục Học Bổng Mỹ
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <Image src={'/book1.png'} alt="book 1" width={164} height={248}></Image>
              </div>
              <div className="flex items-center gap-1" >
                <Image src={'/list-point.png'} alt="." width={20} height={40} />
                <div>
                  Miễn phí tư vấn 1:1 cùng chuyên gia săn học bổng
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start  gap-4">
              <div className="flex items-center gap-1" >
                <Image src={'/list-point.png'} alt="." width={20} height={40} />
                <div>
                  Ebook 12 Bài Luận Chinh Phục Học Bổng Top 10 Đại Học Mỹ
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <Image src={'/book2.png'} alt="book 2" width={164} height={248}></Image>
              </div>
              <div className="flex items-center gap-1" >
                <Image src={'/list-point.png'} alt="." width={20} height={40} />
                <div>
                  Giảm 50% khi order cuốn sách “Bàn Luận Du Học”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
