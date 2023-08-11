import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../store/context/CartContext"
import { Box, Typography } from "@mui/material"
import CardProfileImage from "../../components/CardProfileImage/CardProfileImage"
import CardProfileForm from "../../components/CardProfileForm/CardProfileForm"
import CardProfileTier from "../../components/CardProfileTier/CardProfileTier"
import CardWorkshopUser from "../../components/CardWorkshopsUser/CardWorkshopsUser"
import CardStatsProfile from "../../components/CardStatsProfile/CardStatsProfile"

const ProfileUser = () => {
    const { userId } = useParams()
    const { APIURL } = useContext(CartContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUserById = async (id) => {
            try {
                const URL = `${APIURL}/api/users/${id}/test`;
                const PARAMS = {
                    method: "GET",
                }
                const response = await fetch(URL, PARAMS);

                if (response.ok) {
                    const data = await response.json();
                    setUser(data)
                    console.log(user)
                } else {
                    console.error('error al pedir usuario')
                }

            } catch (err) {
                console.log(err);
            }
        };
        getUserById(userId);
    }, []);
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", marginBottom:5 }}>
                <Box sx={{ maxWidth: "65vw", width: "100%" }}>
                    <Typography variant="h4">Perfil de Usuario</Typography>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                        <Box>
                            <CardProfileImage user={user} />
                            <br />
                            {user.team && <CardProfileTier team={user.team} />}
                            <br />
                            <CardWorkshopUser />
                        </Box>
                        <Box>
                            <CardProfileForm user={user} />
                            <br />
                            <CardStatsProfile />
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default ProfileUser