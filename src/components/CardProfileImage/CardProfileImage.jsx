import { Avatar, Button, Card, CardActions, CardContent, Skeleton, Typography } from "@mui/material"

const CardProfileImage = ({ user }) => {
    const { name, lastname, adress, avatar } = user
    const sizeAvatar = { width: 110, height: 110 }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {avatar ? (
                    <Avatar
                        alt={name}
                        src={avatar}
                        sx={{
                            width: sizeAvatar.width,
                            height: sizeAvatar.height
                        }}
                    />
                ) : (
                    <Skeleton animation="wave" variant="circular" width={sizeAvatar.width} height={sizeAvatar.height} />
                )}
                {name ? (
                    <Typography variant="h5" component="div">
                        {name} {lastname}
                    </Typography>
                ) : (
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1.4rem',width:'10rem' }} />
                )}
                {adress ? (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {adress}
                </Typography>
                ) : (
                    <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem',width:'7.5rem' }} />
                )}

            </CardContent>
        </Card>
    )
}

export default CardProfileImage