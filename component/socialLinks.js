import React from 'react'
import { Stack } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

export default function SocialLinks() {
  return (
    <section className='top-social-links ms-auto'>
      <Stack direction="horizontal" gap={3}>
        <SocialIcon url="https://www.facebook.com/people/%CA%80%E1%B4%87%E1%B4%87%E1%B4%85%E1%B4%80-%E1%B4%9C%E1%B4%85%E1%B4%80%C9%AA%E1%B4%A9%E1%B4%9C%CA%80-%E1%B4%9B%E1%B4%80x%C9%AA-%EA%9C%B1%E1%B4%87%CA%80%E1%B4%A0%C9%AA%E1%B4%84%E1%B4%87/100089808597180/" bgColor="#fff" />
        <SocialIcon url="https://www.instagram.com/" bgColor="#fff" />
        <SocialIcon url="https://www.tripadvisor.in" bgColor="#fff" />
      </Stack>
    </section>
  )
}
