/**
 * 
 * @param {string} dateString Fecha de nacimiento en formato 'YYYY-MM-DD' o 'YYYY-MM-DDTHH:mm:ss.sssZ'
 * @returns {string} Edad actual como string
 */
export default function formatBirthDate(dateString) {
    try {
      const birthDate = new Date(dateString);
      const currentDate = new Date();
      
      let age = currentDate.getFullYear() - birthDate.getFullYear();
  
      const birthMonth = birthDate.getMonth();
      const currentMonth = currentDate.getMonth();
  
      if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age.toString();
    } catch (error) {
      console.error('Error al calcular la edad:', error);
      return 'Error';
    }
  }
  