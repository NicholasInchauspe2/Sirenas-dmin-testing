import { Card, Typography } from "@mui/material"

const CardWorkshopTitle = ({numWorkshop,numMermaids}) => {
    return (
        <Card sx={{p:'1rem 2rem 1rem 2rem',display:'flex',justifyContent:'space-between',backgroundColor:'#673ab7'}}>
            <Typography variant="h4" color='white' >N°: {numWorkshop}</Typography>
            <Typography variant="h4" color='white' >Sirenas: {numMermaids}</Typography>
        </Card>
    )
}

export default CardWorkshopTitle