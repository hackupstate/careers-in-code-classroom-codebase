import React, { useState } from "react"
import "./Footer.scss"

export const Footer = (props) => {
  const [email, setEmail] = useState("")

  return (
    <div className="Footer">
      <div className="Footer__Content mt-5 mb-5 pt-3 pt-md-5">
        <div className="row pl-5 pr-5">
          <div className="col-md-6 order-2 order-md-1">
            <div className="Footer__LinksHeading mb-4">Quick Links</div>
            <div className="Footer__Links d-md-flex">
              <div className="ml-md-3 mr-3 mb-3">
                <a href="" className="Footer__Link">
                  Shipping and Return Policy
                </a>
              </div>
              <div className="mr-3 mb-3">
                <a href="" className="Footer__Link">
                  Terms of Service
                </a>
              </div>
              <div>
                <a href="" className="Footer__Link">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="Footer__MailingList col-md-6 order-1 order-md-2">
            <div className="Footer__MailingListHeading mb-3">
              Sign up for emails to get great deals
            </div>
            <div>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  email && alert(`Email entered: ${email}`)
                }}
              >
                <div className="row pb-3">
                  <div className="col-md-8 p-0 m-0">
                    <input
                      name="email"
                      className="Footer__Email"
                      placeholder="Enter your email"
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                    />
                  </div>
                  <div className="col-md-4 p-0 m-0">
                    <button className="Footer__EmailButton">Get Deals</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
