/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './Vedioplayer.css'
import vedio from '../../assets/855289-hd_1920_1080_25fps.mp4'

const Vedioplayer = ({playstate,setPlaystate}) => {


    const player=useRef(null)
    function closeplayer(e){
        if(e.target=== player.current)
            setPlaystate(false)

    }
  return (
    <div className={`vedio-player${playstate ? '': "hide"} `} ref={player} onClick={closeplayer}>
      <video src={vedio} autoPlay muted controls></video>
    </div>
  )
}

export default Vedioplayer
