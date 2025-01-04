import Facebook from '../assets/icons/facebook.svg?react'
import Youtube from '../assets/icons/youtube.svg?react'
import Instagram from '../assets/icons/instagram.svg?react'
import Twitter from '../assets/icons/twitter.svg?react'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t-[0.5px] border-white py-5 font-[Poppins] text-xs text-white md:px-14">
      <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
        <li>
          <a>Terms of Service</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Product</a>
        </li>
      </ul>
      <span className="max-w-[7rem] leading-relaxed">All Right Reserved @Copyright 2023</span>
      <ul className="flex max-h-16 -translate-x-1/2 flex-col flex-wrap gap-2 md:translate-x-0 md:flex-row md:gap-4">
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <Youtube />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <Twitter />
          </a>
        </li>
      </ul>
    </footer>
  )
}
