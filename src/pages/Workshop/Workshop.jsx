import { Box } from "@mui/material";
import CardWorkshopTitle from "../../components/CardWorkshopTitle/CardWorkshopTitle";
import CardWorkshopDate from "../../components/CardWorkshopDate/CardWorkshopDate";
import CardWorkshopDetails from "../../components/CardWorkshopDetails/CardWorkshopDetails";
import CardWorkshopInvite from "../../components/CardWorkshopInvite/CardWorkshopInvite";
import CardWorkshopUsers from "../../components/CardWorkshopUsers/CardWorkshopUsers";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../store/context/CartContext";
import formatDateTwo from "../../common/Format/FormatDateTwo";

const Taller = () => {
  const [guests, setGuests] = useState([]);
  const [startDate, setStartDate] = useState(Date)
  const [endDate, setEndDate] = useState(Date)
  const [observacion, setObservacion] = useState('lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ');
  const [instructor, setInstructor] = useState('Agostina');
  const [numWorkshop, setWorkshopNum] = useState(0)

  const { APIURL } = useContext(CartContext)

  const { workshopId } = useParams()

  useEffect(() => {
    const getWorkshop = async () => {
      try {
        const URL = `${APIURL}/api/workshops/${workshopId}`;
        const PARAMS = {
          method: "GET",
        };
        const response = await fetch(URL, PARAMS);
        if (response.ok) {
          const data = await response.json();
          setGuests([])
          setStartDate(formatDateTwo(data.dateStart))
          setEndDate(formatDateTwo(data.dateEnd))
          setObservacion(data.observation)
          setWorkshopNum(data.workshopNumber)
          setInstructor('Jeremias')
        } else {
          console.error('error al pedir usuario');
        }

      } catch (err) {
        console.log(err);
      }
    };
    getWorkshop();

  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ maxWidth: "65vw", width: "100%" }}>
          <CardWorkshopTitle numMermaids={1500} numWorkshop={numWorkshop} />
          {/* Fecha y observacion */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
            <CardWorkshopDate
              dateStart={startDate}
              dateEnd={endDate}
              mode={'finish'}
              setStartDate={setStartDate}
              setEndDate={setEndDate} />
            <CardWorkshopDetails
              observacion={observacion}
              instructor={instructor}
              setObservacion={setObservacion}
              setInstructor={setInstructor}
              mode={'finish'}
            />
          </Box>
          {/* Invitados */}
          <Box sx={{ mt: 1, display: "flex", gap: 2 }} >
            <CardWorkshopUsers />
            <CardWorkshopInvite width={'60%'} guests={guests} setGuests={setGuests} />
          </Box>
          {/* Sirenas */}

        </Box>
      </Box>
    </>
  );
};

export default Taller;
