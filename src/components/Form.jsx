import { useState } from "react";

export default function MyForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.username.value;
    setUsername(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="input-name">{username ? username : ""}</p>
      <input
        className="input-box"
        type="text"
        name="username"
        placeholder={"Name your cat!"}
      />
      <button className="input-button" type="submit">
        Submit
      </button>
    </form>
  );
}
