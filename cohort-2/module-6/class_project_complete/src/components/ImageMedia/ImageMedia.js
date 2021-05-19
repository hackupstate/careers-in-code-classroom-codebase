import React from "react"
import "./ImageMedia.scss"

/**
 * This component allows for both full size and thumbnail images.
 */

export const ImageMedia = (props) => {
  return (
    <div className={props.isThumbnail ? "ImageMedia--thumbnail" : "ImageMedia"}>
      <img
        className="ImageMedia__Image"
        src={props.src}
        alt={props.alt}
        style={props.style || {}}
      />
    </div>
  )
}
