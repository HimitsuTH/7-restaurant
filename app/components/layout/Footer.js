import { Kanit } from 'next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400','700']
})

const Footer = () => {

  return (
    <footer className=" bg-neutral-800 h-28 flex justify-center items-center overflow-hidden">
        <p className={`${kanit.className} text-white`}>@ Thai-Nichi Institute of Technology (TNI)</p>
    </footer>
  );
};

export default Footer;