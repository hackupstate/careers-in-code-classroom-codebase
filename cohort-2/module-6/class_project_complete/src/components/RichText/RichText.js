import React from "react"

/**
 * This component displays stringified HTML. Normally HTML shows up as
 * text, and React ignores converting it. This component bypasses that
 * by using the dangerouslySetInnerHTML property. Use this sparingly!
 */

export const RichText = (props) => {
  return (
    <div
      className="RichText"
      dangerouslySetInnerHTML={{ __html: props.text }}
    />
  )
}
