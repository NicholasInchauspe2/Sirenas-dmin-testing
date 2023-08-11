import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";

const CardTallerImage = () => {
  const sizeAvatar = { width: 110, height: 110 };

  //DATA HARCODEADA
  const taller = {
    name: "TALLER PRUEBA",
    users: 100,
    avatar: "https://mibebeyyo.elmundo.es/images/ninos/dibujos-sirenas.webp",
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {taller.avatar ? (
          <Avatar
            alt={taller.name}
            src={taller.avatar}
            sx={{
              width: sizeAvatar.width,
              height: sizeAvatar.height,
            }}
          />
        ) : (
          <Skeleton
            animation="wave"
            variant="circular"
            width={sizeAvatar.width}
            height={sizeAvatar.height}
          />
        )}
        {taller.name ? (
          <Typography variant="h5" component="div">
            {taller.name}
          </Typography>
        ) : (
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1.4rem", width: "10rem" }}
          />
        )}
        {taller.users ? (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {"N Usuarios"} {taller.users}
          </Typography>
        ) : (
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", width: "7.5rem" }}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default CardTallerImage;
