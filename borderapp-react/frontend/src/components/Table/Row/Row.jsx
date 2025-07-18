export default function Row() {
  const data = [
    {
      "Embarque": "92B1280068",
      "Exportacion_Importacion": 2,
      "CAJA_O_PLACA": "60382",
      "numVehiculo": null,
      "ReferenciaTransportista": null,
      "scac": "TFSQ",
      "LLEGADA_PATIO_FECHA": "07/09/25",
      "Llegada_A_Patio_Origen": "13:00",
      "Salioa_de_patio_Fecha": "07/09/25",
      "Salida_de_patio_Hora": "13:10",
      "Rojo_Mex_Fecha": null,
      "Rojo_Mex_Tiempo": null,
      "comentarios_Cambio_de_sello": null,
      "Verde_MX_Fecha": "07/09/25",
      "Verde_MX_hora": "13:11",
      "Inspeccion_USA_Fecha": null,
      "Inspeccion_USA_HORA": null,
      "Tipo_de_Inspeccion_USA": null,
      "Inspeccion_USA_cambio_de_sello": null,
      "Verde_USA_Fecha": "07/09/25",
      "Verde_USA_Tiempo": "13:20",
      "Resguardo_Fecha": null,
      "Resguardo_Tiempo": null,
      "Donde_se_resguardo": null,
      "Fecha_de_entrega": "07/09/25",
      "Hora_de_entrega": "13:35",
      "Quien_recibio": "JUAN"
    }
  ];

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}> {/* Always include a unique key when mapping lists in React */}
          <td>{row.Embarque}</td>
          <td>{row.Exportacion_Importacion}</td>
          <td>{row.CAJA_O_PLACA}</td>
          <td>{row.numVehiculo}</td>
          <td>{row.ReferenciaTransportista}</td>
          <td>{row.scac}</td>
          <td>{row.LLEGADA_PATIO_FECHA}</td>
          <td>{row.Llegada_A_Patio_Origen}</td>
          <td>{row.Salioa_de_patio_Fecha}</td>
          <td>{row.Salida_de_patio_Hora}</td>
          <td>{row.Rojo_Mex_Fecha}</td>
          <td>{row.Rojo_Mex_Tiempo}</td>
          <td>{row.comentarios_Cambio_de_sello}</td>
          <td>{row.Verde_MX_Fecha}</td>
          <td>{row.Verde_MX_hora}</td>
          <td>{row.Inspeccion_USA_Fecha}</td>
          <td>{row.Inspeccion_USA_HORA}</td>
          <td>{row.Tipo_de_Inspeccion_USA}</td>
          <td>{row.Inspeccion_USA_cambio_de_sello}</td>
          <td>{row.Verde_USA_Fecha}</td>
          <td>{row.Verde_USA_Tiempo}</td>
          <td>{row.Resguardo_Fecha}</td>
          <td>{row.Resguardo_Tiempo}</td>
          <td>{row.Donde_se_resguardo}</td>
          <td>{row.Fecha_de_entrega}</td>
          <td>{row.Hora_de_entrega}</td>
          <td>{row.Quien_recibio}</td>
        </tr>
      ))}
    </tbody>
  );
}