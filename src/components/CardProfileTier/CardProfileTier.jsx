import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const CardProfileTier = ({ team }) => {
    const [userOne, setUserOne] = useState( team.userOne || null)
    const [userTwo, setUserTwo] = useState( team.userTwo || null)


    return (
        <Card>
            <CardContent>
                <Typography variant="h5" >
                    Team Sirena
                </Typography>
                <Divider />
                {
                    userOne &&  (
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={userOne.avatar}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <Typography color="text.secondary" >
                                    {userOne.name} {userOne.lastname}
                                </Typography>
                                <Typography color="text.secondary"  >
                                    {userOne.adress}
                                </Typography>
                            </Box>
                        </Box>
                    )
                }
                {
                    userTwo &&  (
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={userTwo.avatar}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <Typography color="text.secondary" >
                                    {userTwo.name} {userTwo.lastname}
                                </Typography>
                                <Typography color="text.secondary"  >
                                    {userTwo.adress}
                                </Typography>
                            </Box>
                        </Box>
                    ) 
                }

            </CardContent>
        </Card>
    )
}

export default CardProfileTier