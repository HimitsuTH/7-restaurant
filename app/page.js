import Image from "next/image";

// IMGAGES
import main_image from '../public/main-image.jpg'
import isao from '../public/isao.jpg'
import bankara from '../public/bankara.jpg'
import kinai from '../public/kiani.jpg'
import Hanaya from '../public/hanaya.jpg'
import ranhaman from '../public/rahaman.jpg'
import rung from '../public/rung.jpg'
import tonkin from '../public/tonkin.jpg'

import Footer from "./components/layout/Footer";
import { Kanit } from 'next/font/google'


const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400','700']
})



const RESTAURANT = [
  {
    name:"Isao",
    image: isao,
    description: "“ร้านอาหารกรุงเทพฯ กับเมนู “ซูชิ” สไตล์ฟิวชั่นที่เปิดมาเกิน 10 ปี ขายดีมาตลอด อยู่ยงคงกระพันในซอยสุขุมวิท 31 มานานแสนนาน เป็นร้านอาหารกรุงเทพฯ ที่มีเมนูเหมือนเดิมตลอด แต่ลูกค้าก็เยอะเสมอ และเชื่อว่าคนส่วนมากก็สั่งแทบจะเหมือนเดิมทุกครั้งด้วย ที่ชอบที่สุดคือ “Crispy Spicy Tuna Nigiri” รองลงมาคือ “Volcano” นอกนั้นก็เป็นเมนูที่กินได้เรื่อย ๆ แต่ซอสของทางร้านจะหวานนำนะ สามารถจอดรถที่โรงแรม S31 ได้ แล้วให้ทางร้านสแตมป์บัตรจอดรถให้” (โดยคุณ Orn’s Bellyjourney)",
    link: "https://www.wongnai.com/restaurants/isao"
  },
  {
    name:"Bankara Ramen สุขุมวิท 39",
    image: bankara,
    description:"“แวะมากินร้านอาหารกรุงเทพฯ ร้านนี้ทั้งที ต้องไม่พลาดเมนู “หมูสามชั้น Kakuni” กลัวอ้วนแค่ไหนก็ต้องขอสักชิ้น ถือเป็นเมนู “ราเมนหมูสามชั้น” ในตำนานเลย ชามนี้ให้เส้นมาเยอะ น้ำซุปที่เอาไว้จุ่มเส้น ไม่เค็มหรือหวานโดด กำลังดี จุ่มเส้นลงไปจนเคลือบทั่ว กินแล้วอร่อย เป็นร้านอาหารกรุงเทพฯ บรรยากาศแบบญี่ปุ่น มีการแบ่งที่นั่งเป็นสัดส่วน นั่งกินได้สบาย ๆ มีน้ำเปล่าบริการฟรี ส่วนพนักงานก็บริการดี อาหารเสิร์ฟเร็วทันใจคนหิวค่ะ สามารถจอดรถบริเวณเวิ้งหน้าร้านได้เลย มีพนักงานคอยบริการสะดวกสบาย” (โดยคุณ Whyokay)",
    link: "https://www.wongnai.com/restaurants/bankara-skv39"
  },
  {
    name:"Kiani ฟิฟท์ตี้ฟิฟท์ ทองหล่อ",
    image: kinai,
    description:"“เป็นร้านอาหารกรุงเทพฯ สไตล์เกาหลีที่เรื่องรสชาติทำได้สม่ำเสมอ บริการก็ดีมาก ประทับใจสุด ๆ ทางร้านจะเสิร์ฟเครื่องเคียงมาก่อน มีประมาณ 5 อย่าง เติมได้ไม่อั้นตลอดทั้งมื้อ ส่วนเมนูที่ได้ลองจะมี “ชุดคงบุลหมูหมักกระทะร้อน” จัดใหญ่เลย ให้มาเยอะมาก รสชาติหมู หมักมาเข้าเนื้อสุด ๆ “จับแชหมู” จานนี้ก็กลมกล่อม วุ้นเส้นไม่เละ กินแล้วเข้ากันดีค่ะ “ต็อกบบกกี” กับ “ไข่ตุ๋นชีส” ก็ทำได้ดีเช่นกัน เป็นร้านอาหารกรุงเทพฯ ในดวงใจที่มีความใส่ใจในรายละเอียด ขนาดจบมื้ออาหารแล้ว ยังเสิร์ฟ “น้ำข้าวบาร์เลย์” สำหรับช่วยย่อยให้อีกด้วย” (โดยคุณ Bigstargirl)",
    link: "https://www.wongnai.com/restaurants/kiani"
  },
  {
    name:"Hanaya",
    image: Hanaya,
    description:"“ร้านอาหารกรุงเทพฯ สไตล์ญี่ปุ่นที่อยู่มาตั้งแต่สมัยสงครามโลก ถือเป็นร้านอาหารญี่ปุ่นร้านแรก ๆ ของไทยเลย เปิดมานานกว่า 84 ปี มีเมนูที่โคตรประทับใจอย่าง “เซตอาหารกลางวัน” ที่มีทั้งปลาดิบ, ปลาแซลมอนนึ่งซีอิ๊ว, ไก่ทอดราดซอส และข้าวกับซุปมิโสะ ของดีทุกอย่าง อิ่มเลยสำหรับเซตนี้ เมนู “ข้าวเทมปุระรวม”, “รากบัวทอดกรอบ” และ “ปลาข้าวสารกับหัวไชเท้าฝน” ก็ดีเหมือนกัน เป็นร้านอาหารในกรุงเทพฯ ที่ชวนให้อิ่มเพลินได้ดี” (โดยคุณ รีวิวเพื่อ)",
    link: "https://www.wongnai.com/restaurants/hanaya"
  },
  {
    name:"Al-rahaman Restaurantal-rahaman",
    image: ranhaman,
    description:"“ร้านอาหารกรุงเทพฯ สไตล์อินเดียที่จัดใหญ่ให้เยอะ บรรยากาศเหมือนอยู่อินเดียจริง ๆ ทั้งที่ไม่เคยไปมาก่อนนี่แหละ! ภายในร้านจะอึมครึมหน่อย เมนูมีเพียบ สั่งมาแบบไม่เกรงใจกระเพาะเลย ทั้ง “Biryani” ข้าวหมกไก่รสเครื่องเทศเข้มข้น “แกง” ต่าง ๆ ที่ดีมาก ๆ และ “Laban Aaran” เมนูเครื่องดื่มสุดแปลกที่ใช้ “เกลือ” ผสมมากับโยเกิร์ต โดยรวมเป็นร้านอาหารในกรุงเทพฯ ที่โอเคเลย อาหารหลายอย่างอร่อย จานใหญ่ให้เยอะ แนะนำให้ไปกินกันหลาย ๆ คน จะได้ลองหลาย ๆ อย่าง” (โดยคุณ Sky The Sheep)",
    link: "https://www.wongnai.com/restaurants/290397My-al-rahaman-restaurant-al-rahaman"
  },
  {
    name:"Tonkin Annam 東京安南",
    image: tonkin,
    description:"“ร้านอาหารกรุงเทพฯ สไตล์เวียดนามในซอยเล็ก ๆ โดยเมนูของทางร้านจะไม่ได้มีมากมายนะคะ เมนูแนะนำจะเป็น “บั๋นห์แบ่ว”, “บั๋นห์ฮ่อย” ที่เป็นเส้นหมี่กับหมูย่าง “ปากหม้อเวียดนาม” และ “หมูย่างใบชะพลู” ทั้งหมดที่แนะนำ รสชาติเหมือนไปกินที่เวียดนามจริง ๆ เลยค่ะ เป็นร้านอาหารในกรุงเทพฯ ที่ราคาอาจจะสูงหน่อย แต่ปริมาณที่ได้รับก็ถือว่าโอเคค่ะ ทางร้านไม่มีที่จอดรถนะคะ ต้องจอดในซอยค่ะ” (โดยคุณ Khwanjira Sakornbutr)",
    link: "https://www.wongnai.com/restaurants/256846Fb-tonkin-annam-%E6%9D%B1%E4%BA%AC%E5%AE%89%E5%8D%97"
  },
  {
    name:"รุ่งเรือง (ตั๋ง) ก๋วยเตี๋ยวหมู สุขุมวิท26 เจ้าเก่า (รุ่งเรือง (ตั๋ง) ก๋วยเตี๋ยวหมู) ร้านหัวมุมนะจ๊ะ",
    image: rung,
    description:"“ร้านอาหารกรุงเทพฯ ที่เป็นที่แนะนำของ มิชลินไกด์ ในส่วนของ Street Food บวก Bib Gourmond เข้าไปด้วย เมนูเข้าใจง่ายไม่ซับซ้อน เพราะเสิร์ฟแค่ “ก๋วยเตี๋ยวหมูสับใส่ลูกชิ้นปลา” อยากจัดจ้านหน่อยก็สั่งเป็น “ก๋วยเตี๋ยวต้มยำ” ชามใหญ่ โดดเด่นด้วยเครื่องเคราแน่น ๆ หมูสับดีมาก รสชาติครบเครื่อง น้ำซุปไม่จัดจ้านมาก ลองสั่งแบบแห้งก็อร่อยดีเหมือนกัน มิชลินเค้าแนะนำให้สั่งมากินกับ “หนังปลาทอด” แต่ได้ “ไส้หมูลวก” มาด้วยก็ดีไม่แพ้กัน เป็นร้านอาหารในกรุงเทพฯ ที่เป็นของดี จ่ายร้อนมีทอนนะ”​ (โดยคุณ arjin)",
    link: "https://www.wongnai.com/restaurants/rungrueangnoodle"
  },
]

export default function Home() {
  return (
    <main className=" overflow-hidden transition-all">
      <div className="relative bg-white overflow-hidden md:h-[55vh] mb-4">
        <div className={`  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 z-50`}>
          <h1 className={` ${kanit.className}  text-3xl font-serif font-bold text-white md:text-6xl text-center drop-shadow-lg`}>7 ร้านอาหาร กรุงเทพฯ </h1>
        </div>
        <Image
          src={main_image}
          placeholder="blur"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            height: 'auto',
            width: '100%',
            filter: 'brightness(0.5)'
          }}
        />
      </div>
    
      {/* <Carousel data={DATA}/> */}


      <div className=" p-16 overflow-hidden">
        { RESTAURANT && RESTAURANT.map((r,i) => (
          <div className={` flex ${i % 2 == 0 ?' md:flex-row-reverse' : 'md:flex-row'} gap-5 mb-10 md:justify-normal justify-center flex-col items-center`} key={r.name + i}>
            <Image
              src={r.image}
              placeholder="blur"
              style={{
                objectFit: 'cover',
                height: 'auto',
                width: '40vw',
                filter: 'brightness(0.7)'
              }}
          />
           <div className=" flex flex-col items-center md:w-1/2">
            <div className=" mb-5 flex flex-col gap-3 ">
                <h2 className={`${kanit.className} text-2xl font-bold underline`}>{i+1 + ". " +r.name}</h2>
                <p className={`${kanit.className}`}>{r.description}</p>
              </div>
              <a href={r.link} className={`${kanit.className} bg-black text-white p-2 text-center`} target="_blank">more info</a>
            </div>
          </div>
          ))
        }
      </div>
      <Footer/>
    </main>
  );
}
