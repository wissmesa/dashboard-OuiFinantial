
const SetCookieExample = () => {


  function formatStartTime(arr) {
    console.log(arr,'arr')
    return arr.collection.map(item => {
      const startTime = new Date(item.start_time);
      const formattedDate = startTime.toLocaleDateString('es-ES', {
        day: '2-digit', // Día con 2 dígitos
        month: '2-digit', // Mes con 2 dígitos
        year: 'numeric' // Año completo
      });
  
      const formattedTime = startTime.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Para usar formato de 24 horas
      });

      return {
        ...item,
        start_date: formattedDate,
        start_time: formattedTime
      };
    });
  }

  async function fetchUserData() { 
    const url = "https://api.calendly.com/event_type_available_times?event_type=https://api.calendly.com/event_types/665d0c20-1af8-41d7-8966-f4365f5692e2&start_time=2024-12-10T00:00:00Z&end_time=2024-12-17T00:00:00Z";
    const apiKey = "Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzMzNTA4NjY0LCJqdGkiOiIyZjhkNTk2Yi1mNTE3LTQzZGEtOTZhZS1mOGZiNjg0ZGI0NjgiLCJ1c2VyX3V1aWQiOiJjMzU2YjgxMy00MGYwLTRmMjMtOWRlYS1hMjEyNjJhMWZhY2EifQ.Ubhtg1eIsDg-EA1RREOjPRI5V6zrGNFyMpB_pwFdZgUemSLXMIaIApiAeXtDzNYG90c0rikFrCKVI-Wyz8XdGQ"; // Aquí deberías poner tu API Key o Token de HubSpot

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json; charset=utf-8',  // Added charset=utf-8
          Authorization: apiKey,
          charset: "utf8",
          accept: "*/*",
        },
        // body: JSON.stringify(payload),
        // mode: "no-cors",
      })
      const data = await response.json()
      console.log(data, "dataa");
      if(data){
        const newJson =  formatStartTime(data)
        console.log(newJson,'new')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleClick = () => {
    fetchUserData();
  };

  return <button onClick={handleClick}>Set Cookie</button>;
};

export default SetCookieExample;
