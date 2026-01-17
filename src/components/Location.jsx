import { useState } from "react";

const locations = [
  {
    name: "Nike Factory Store - Kothrud",
    address:
      "Shop No. 3, Meena CHS, Paud Road, Opp. Vanaz Company, Kothrud, Pune 411038",
    map: "https://www.google.com/maps?q=Nike%20Factory%20Store%20Kothrud%20Pune&output=embed",
  },
  {
    name: "Nike MG Road - Camp",
    address:
      "SN 308, Mezzanine & Ground Floor, Mahatma Gandhi Rd, Camp, Pune 411001",
    map: "https://www.google.com/maps?q=Nike%20MG%20Road%20Pune&output=embed",
  },
  {
    name: "Nike Phoenix Market City - Viman Nagar",
    address: "1st Floor, Phoenix Mall, Pune Nagar Rd, Viman Nagar, Pune 411014",
    map: "https://www.google.com/maps?q=Nike%20Phoenix%20Market%20City%20Pune&output=embed",
  },
];

const Location = () => {
  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" p-4">
      <h1 className="fw-bold text-center mb-4">Nike Stores in Pune</h1>

      <div className="mb-4 text-center">
        <input
          type="text"
          className="p-2 w-md-50 "
          placeholder="Search by store name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredLocations.map((loc, index) => (
        <div key={index} className="mb-5 d-flex flex-column align-items-center">
          <h4 className="fw-bold">{loc.name}</h4>
          <p>{loc.address}</p>
          <iframe src={loc.map} title={loc.name}></iframe>
        </div>
      ))}

      {filteredLocations.length === 0 && (
        <p className="text-center">No stores found.</p>
      )}
    </div>
  );
};

export default Location;
