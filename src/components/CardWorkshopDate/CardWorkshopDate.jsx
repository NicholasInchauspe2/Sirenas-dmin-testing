import { Box, Card, CardContent, Chip, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const CardWorkshopDate = ({ dateStart, dateEnd, mode, setStartDate, setEndDate }) => {
    const [formattedDateStart, setFormattedDateStart] = useState(dateStart);
    const [formattedDateEnd, setFormattedDateEnd] = useState(dateEnd);

    useEffect(() => {
        setFormattedDateStart(new Date(dateStart).toISOString().split('T')[0]);
        setFormattedDateEnd(new Date(dateEnd).toISOString().split('T')[0]);
    }, [dateStart, dateEnd]);

    const handleStartDateChange = (event) => {
        setFormattedDateStart(event.target.value);
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        const endDate = event.target.value;
        if (formattedDateStart && endDate < formattedDateStart) {
            return;
        }
        setFormattedDateEnd(endDate);
        setEndDate(endDate);
    };

    return (
        <Card sx={{ mt: 1, width: "100%" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", alignContent: "space-between", height: "15rem" }}>
                <TextField
                    fullWidth
                    name={"startDate"}
                    label={"Fecha de Inicio"}
                    type="date"
                    value={formattedDateStart}
                    onChange={handleStartDateChange}
                    disabled={mode !== "new"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            min: "1900-01-01",
                            max: "2100-12-31",
                        },
                    }}
                />
                <TextField
                    fullWidth
                    name={"endDate"}
                    label={"Fecha de Culminación"}
                    type="date"
                    value={formattedDateEnd}
                    onChange={handleEndDateChange}
                    disabled={mode !== "new"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            min: formattedDateStart,
                            max: "2100-12-31",
                        },
                    }}
                />
                <Box sx={{ textAlign: "center" }}>
                    {mode === "new" ? <Chip label="Nuevo taller" color="info" /> : ""}
                    {mode === "finish" ? <Chip label="Finalizado" color="error" /> : ""}
                    {mode === "edit" ? <Chip label="En curso" color="success" /> : ""}
                </Box>
            </CardContent>
        </Card>
    );
};

export default CardWorkshopDate;
