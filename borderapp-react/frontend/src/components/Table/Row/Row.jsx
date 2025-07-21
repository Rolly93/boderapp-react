export default function Row() {
  const data = [
    {
      "unit": "s20",
      "Triler": "TA202351",
      "Reference":"92b12354",
      "Cliente": "cliente",
      "Operacion": "Exportacion",
      "ReferenciaTransportista": "Track123456",
      "Pickup": "Recoleccion",
      "departure": "Salida de patio",
      "Rojo_Mex": "Inspeccion",
      "New_Seal_Mx": "s2563",
      "clearCustomsMx": "Verde Mex",
      "USA_Inspection": "Rejo USA",
      "Type_Inspection_USA": "GAMA",
      "New_Seal_USA": "Nuevo sello",
      "clear_USA": "Verde USA",
      "Resguardo_Fecha": "07/09/25 17:00 resguardo",
      "Yard":"Patiot",
      "Delivery": "07/09/25 15:00",
      "Recieve": "JUAN",
      "complete": "yes"
    }
  ];


      const row =data.map((row) => (
        <tr key={row.Embarque}> 
        <td>{row.unit}</td>
        <td>{row.Reference}</td>
        <td>{row.Triler}</td>
        <td>{row.Cliente}</td>
        <td>{row.Operacion}</td>
        <td>{row.ReferenciaTransportista}</td>
        <td>{row.Pickup}</td>
        <td>{row.departure}</td>
        <td>{row.Rojo_Mex}</td>
        <td>{row.New_Seal_Mx}</td>
        <td>{row.clearCustomsMx}</td>
        <td>{row.USA_Inspection}</td>
        <td>{row.Type_Inspection_USA}</td>
        <td>{row.New_Seal_USA}</td>
        <td>{row.clear_USA}</td>
        <td>{row.Resguardo_Fecha}</td>
        <td>{row.Yard}</td>
        <td>{row.Delivery}</td>
        <td>{row.Recieve}</td>
        <td>{row.complete}</td>
        </tr>
      ))

  return (
    <tbody>
      {row}
    </tbody>
  );
}