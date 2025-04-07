'use client';
import { useState } from "react";

export default function Home() {
  const [userType, setUserType] = useState("");
  const [investment, setInvestment] = useState(0);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Bienvenido a Urbanova Capital</h1>
      <p>Selecciona tu tipo de usuario:</p>
      <button onClick={() => setUserType("inversor")}>Inversor</button>
      <button onClick={() => setUserType("propietario")}>Propietario</button>
      
      {userType === "inversor" && (
        <div style={{ marginTop: "2rem" }}>
          <p>Introduce la cantidad que deseas invertir:</p>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
          <p>Has invertido: €{investment}</p>
        </div>
      )}

      {userType === "propietario" && (
        <div style={{ marginTop: "2rem" }}>
          <p>Gracias por confiar en Urbanova Capital. Te contactaremos pronto.</p>
        </div>
      )}
    </main>
  );
}