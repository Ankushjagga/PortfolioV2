import React from 'react'
import moment from "moment"

const formatRange = (start, end) => {
  const from = start ? moment(start).format("MMM YYYY") : ""
  const to = end ? moment(end).format("MMM YYYY") : "Present"
  return from ? `${from} - ${to}` : to
}

const ExpEduBox = ({ title, data }) => {
  return (
    <>
      <h1 id="feel" style={{ textAlign: "center" }}>{title}</h1>

      {data?.map((ele) => (
        <div className='expDetail' key={ele._id || ele.role || ele.school}>
          <div className='experineceInner'>
            {/* The API returns startDate / endDate; the old lowercase keys never
                matched, so every entry rendered as "Present". */}
            <p className='time'>{formatRange(ele?.startDate, ele?.endDate)}</p>

            <div className='exp'>
              {ele?.image && (
                <img className='expImg' src={ele.image} alt={ele?.company || ele?.school || ""} loading="lazy" />
              )}

              <div>
                <h1>{ele?.role || ele?.school}</h1>
                <h2 style={{ opacity: 0.6 }}>{ele?.company || ele?.specialization}</h2>

                <ul className='description'>
                  {Array.isArray(ele?.description)
                    ? ele.description.map((desc, index) => <li key={index}>{desc}</li>)
                    : <li>{ele?.description}</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ExpEduBox
