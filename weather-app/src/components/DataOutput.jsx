import React from 'react'

const DataOutput = ({ name, data }) => {
  return (
    <>
      <div className="dataContainer">
        <p className="dataTitle">{name}:</p>
        <p className="dataInfo">{data}</p>
      </div>
    </>
  )
}

export default DataOutput
