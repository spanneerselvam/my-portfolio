/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'

const Slide = ({ content, images }) => (
  <>
    {images ? (
      <div
        css={css`
      height: 100%;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
      ></div>
    ) : (
      <div
        css={css`
          height: 100%;
          width: 100%;
        `}
      >
        {content}
      </div>
    )}
  </>
)

const MemoSlide = memo(Slide)

export default MemoSlide
