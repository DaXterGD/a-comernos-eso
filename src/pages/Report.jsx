import "../styles/pages/Report.css";
import Form from "../components/Form";
import bug from "../assets/bug.png";
import Return from "../components/Return";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Report = () => {
  return (
    <Form
      formClass="report-form"
      logoImg={bug}
      title="Reportar un error"
      subtitle="Para que podamos mejorar tu experiencia"
    >
      <Return />
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
