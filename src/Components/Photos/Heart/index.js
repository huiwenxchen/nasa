import React, { useState} from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledButton } from "../styles"


const LikeButton = () => {
  const[notlike, setLike] = useState(true)

  return (
    <>
    <div>
      <StyledButton onClick={() => setLike((prevLike) => !prevLike)}>
        {notlike ? <FavoriteBorderIcon />: <FavoriteIcon />}
      </StyledButton>
    </div>
    </>
  )
}

export default LikeButton;