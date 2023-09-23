/* 
  Componente de ruta, en el se muetra el formulario para realizar el reporte de un error
*/
// Importación de estilos
import "../styles/pages/Report.css";
// Importación de otros componentes e imágenes de la aplicación
import Form from "../components/Form";
import bug from "../assets/bug.png";
import Return from "../components/Return";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Report = () => {
  return (
    // Definición de formulario de reporte de errores
    <Form
      formClass="report-form"
      logoImg={bug}
      title="Reportar un error"
      subtitle="Para que podamos mejorar tu experiencia"
    >
      {/* Botón para regrear a la página anterior en el historial */}
      <Return />
      {/* Definición de contenedores para los inputs para acomodar los elementos de forma correcta en modo móvil y modo de escritorio */}
      <div className="input-container first">
        <label htmlFor="title">Título del error</label>
        <Input
          type="text"
          id="title"
          placeholder="¿Como llamarías a este error?"
          isRequired={true}
          maxLength="30"
        />
      </div>
      <div className="input-container">
        <label htmlFor="description">Descripción del error</label>
        <TextArea
          name="description"
          id="description"
          placeholder="Denos una descripción más amplia de este error (max 500 caracteres)."
          isRequired={true}
        />
      </div>
      <div className="input-container">
        <label htmlFor="behavior">Comportamiento correcto</label>
        <TextArea
          name="behavior"
          id="behavior"
          placeholder="¿Cuál debería ser el comportamiento esperado? (max 500 caracteres)."
          isRequired={true}
        />
      </div>
      <div className="input-container">
        <label htmlFor="found-by">Error encontrado por (tu nombre)</label>
        <Input
          type="text"
          id="found-by"
          placeholder="Tu nombre"
          isRequired={true}
          maxLength="30"
        />
      </div>
      <div className="input-container">
        <label htmlFor="error-date">
          Fecha en la que encontraste este error
        </label>
        <Input type="date" id="error-date" isRequired={true} />
      </div>
      <Button text="Reportar" />
    </Form>
  );
};

export default Report;
