import Image from 'next/image'
import React, { Fragment } from 'react'

export const text = {
  h1: 'Live Advanced Trading Education',
  h2:
    '      Bookmap offers a robust Live Advanced Education for subscribers, and Free Educational\n' +
    '              Resources to all.',
  h3: 'OPEN TO ALL',
  h4: 'BOOKMAP SUBSCRIBERS (PAID)',

  s1: (
    <Fragment>
      <div>
        <ul>
          <li>Register to a Free Basics webinar</li>
          <li>Free access to Friday’s Live Advanced webinar</li>
          <li>Other Free resources</li>
        </ul>
      </div>
    </Fragment>
  ),

  s2: (
    <Fragment>
      <div>
        <ul>
          <li>Educational Course online</li>
          <li>Daily Advanced webinars</li>
          <li>
            <b>Live Trading</b> from Professionals
          </li>
          <li>Other Trading educational resources</li>
        </ul>
      </div>
    </Fragment>
  ),

  i1: (
    <Fragment>
      <Image src="/static/main/s6/chart.png" width={300} height={155} />
    </Fragment>
  ),
  i2: (
    <Fragment>
      <Image src="/static/main/s6/absoption.jpg" width={300} height={160} />
    </Fragment>
  ),

  btn: 'GO TO EDUCATION',
}
