import "./App.css";

import { useGetAllLocations } from "./services/backend.service";

function App() {
  const { data, error, isLoading } = useGetAllLocations();

  console.log("data : ", data);

  if (error) {
    return <div>No documents available</div>;
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  const locations = data?.data ?? [];

  console.log("locations :", locations);

  return (
    <>
      <div>
        <h1>Workflow Orders by Location</h1>
        {locations.map((location: any) => (
          <div key={location.id}>
            <h2>{location.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
