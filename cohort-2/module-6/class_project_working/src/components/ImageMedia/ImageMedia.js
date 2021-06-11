import "./ImageMedia.scss"

export const ImageMedia = (props) => {
  /**
   * Props needed
   * props.src
   * props.alt
   * props.style
   * props.isThumbnail
   */

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
