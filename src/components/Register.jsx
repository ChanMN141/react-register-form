import { useState } from "react";

const genders = ["Male", "Female", "Other"];
const hobbiesList = ["Music", "Movies", "Plastic Model"];
const roles = ["General staff", "Developer", "System Analyst"];

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  function toggleHobby(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setHobbies(prev => [...prev, value]);
    } else {
      setHobbies(prev => prev.filter(h => h !== value));
    }
  }

  return (
    <div style={{ width: "300px", margin: "20px" }}>
      <div>
        Username <br />
        <input onChange={e => setUsername(e.target.value)} />
      </div>

      <div>
        Firstname <br />
        <input onChange={e => setFirstname(e.target.value)} />
      </div>

      <div>
        Lastname <br />
        <input onChange={e => setLastname(e.target.value)} />
      </div>

      <div>
        Gender <br />
        {genders.map(g => (
          <div key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              onChange={e => setGender(e.target.value)}
            /> {g}
          </div>
        ))}
      </div>

      <div>
        Hobbies <br />
        {hobbiesList.map(h => (
          <div key={h}>
            <input
              type="checkbox"
              value={h}
              onChange={toggleHobby}
            /> {h}
          </div>
        ))}
      </div>

      <div>
        Role <br />
        <select onChange={e => setRole(e.target.value)}>
          <option value="">Select</option>
          {roles.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <hr />

      <div>Username: <span style={{ color: "red" }}>{username}</span></div>
      <div>Firstname: <span style={{ color: "red" }}>{firstname}</span></div>
      <div>Lastname: <span style={{ color: "red" }}>{lastname}</span></div>
      <div>Gender: <span style={{ color: "red" }}>{gender}</span></div>
      <div>Hobbies: <span style={{ color: "red" }}>{hobbies.join(", ")}</span></div>
      <div>Role: <span style={{ color: "red" }}>{role}</span></div>
    </div>
  );
}
