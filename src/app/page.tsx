import Image from "next/image";

export default function Home() {
  return (
    <header>
    <nav className="h-[80px] bg-blue-500 w-full items-start justify-center py-[30px]">
      <ul className="flex px-[50px] gap-12">
        <li className="">
          <a href="#services" className="text-white font-semibold">Главная</a>
        </li>
        <li className="">
          <a href="#services" className="text-white font-semibold">О нас</a>
        </li>
        <li className="nav-item">
          <a href="#benefits" className="text-white font-semibold">Плюсы</a>
        </li>
        <li className="nav-item">
          <a href="#adres" className="text-white font-semibold">Наш адрес</a>
        </li>
        <li className="nav-item">
          <a href="#contacts" className="text-white font-semibold">Контакты</a>
        </li>
      </ul>
    </nav>
  </header>
  );
}
