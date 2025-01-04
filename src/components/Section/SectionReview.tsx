import { useState } from 'react'

import ReviewCard from '../ReviewCard'
import ArrowIcon from '../../assets/icons/arrow.svg?react'

import {
  Splide,
  SplideTrack,
  SplideSlide,
  Options,
  // @ts-expect-error typescript type not available
} from '@splidejs/react-splide'

const splideOption: Options = {
  arrows: true,
  pagination: true,
  classes: {
    pagination: 'pagination',
    page: 'pagination-page',
  },
  padding: '2rem',
  gap: '2rem',
  trimSpace: true,
  autoWidth: true,
  breakpoints: {
    640: {
      padding: '1rem',
      gap: '3rem',
    },
  },
}

export default function SectionReview() {
  const [slideState, setSlideState] = useState<'first' | 'last' | 'middle'>('first')
  function onMove(_slide: never, list: { items: string | never[] }, _prev: never, curr: { page: number }) {
    if (curr?.page === undefined) return

    if (curr.page < 1) setSlideState('first')
    else if (curr.page > list.items.length - 2) setSlideState('last')
    else setSlideState('middle')
  }

  const reviews = [
    {
      image: 'profiles/john_doe.jpg',
      name: 'John Doe',
      rating: 5,
      comment: `Great course! I learned so much about podcasting, 
      and the content was well-structured and easy to follow.`,
    },
    {
      image: 'profiles/emma_johnson.jpg',
      name: 'Emma Johnson',
      rating: 4,
      comment: `The podcasting course was a game-changer for me. 
      The tips on sound quality and engaging delivery were invaluable.`,
    },
    {
      image: 'profiles/michael_williams.jpg',
      name: 'Michael Williams',
      rating: 3,
      comment: `The course provided a solid foundation, but I 
      wish there were more in-depth interview techniques covered.`,
    },
    {
      image: 'profiles/sophia_lee.jpg',
      name: 'Sophia Lee',
      rating: 5,
      comment: `Highly recommended! The personalized coaching 
      sessions and promotion strategies were fantastic.`,
    },
  ]

  return (
    <section id="review" className="flex flex-col gap-4 sm:mr-auto sm:w-4/5 md:min-h-screen md:gap-6 lg:w-full">
      <h2 className="text-2xl font-bold md:text-4xl">Review from customers</h2>
      <h3 className="max-w-[400px] font-[Poppins] text-base md:text-lg">Check out of some unbiased Reviews, Ratings & Recommendations from the Real Users</h3>
      <div className="absolute left-0 mt-32 w-screen">
        <Splide options={splideOption} hasTrack={false} onPaginationUpdated={onMove}>
          <SplideTrack>
            {reviews.map(({ image, name, rating, comment }, index) => (
              <SplideSlide key={index}>
                <ReviewCard image={image} name={name} rating={rating} comment={comment} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows absolute left-1/2 flex w-[95%] -translate-x-1/2 -translate-y-44 justify-between md:w-[80%]">
            <button
              className={`splide__arrow splide__arrow--prev rounded-full bg-[#E1A6FF]/40 p-1 transition-colors duration-200 hover:bg-[#E1A6FF] ${slideState === 'first' ? 'invisible' : 'visible'}`}>
              <ArrowIcon className="h-8 w-8" />
            </button>
            <button
              className={`splide__arrow splide__arrow--next rotate-180 transform rounded-full bg-[#E1A8FF]/40 p-1 transition-colors duration-200 hover:bg-[#E1A6FF] ${
                slideState === 'last' ? 'invisible' : 'visible'
              }`}>
              <ArrowIcon className="h-8 w-8" />
            </button>
          </div>
        </Splide>
      </div>
      {/* Placeholder */}
      <div className="invisible mt-1 h-[238px] w-[465px]" />
    </section>
  )
}
